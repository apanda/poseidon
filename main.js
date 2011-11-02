#!/usr/bin/env node
var uglify = require('uglify-js'),
    fs = require('fs'),
    traverse = require('traverse'),
    assert = require('assert'),
    parser = uglify.parser;
// Define us some constants since constants are good
constants = {
    CALL_FUNCTION: 1,
    CALL_ARGS: 2,
    ASSIGN_TYPE: 1,
    ASSIGN_LHS: 2,
    ASSIGN_RHS: 3
};

var deparse = function (ast, b) {
    return uglify.uglify.gen_code(ast, { beautify : b });
};

// the main function, will eventually reorganize this
function main(args) {
    // First find the filename
    if (args.length != 3) {
        console.log('Usage main.js <filename>, given ' + args.join(' '));
        return;
    }

    // This is a test case in some ways, we can currently not handle
    // this kind of callback, since I don't track variable values in closures currently, and
    // this means that I cannot quite track variables such as this. I have an idea for this, but
    // that will be another feature
    var callback = function (err, data) {
        if (err) throw err;
        // Since I end up using this file for testing, we want to eliminate the hash bang string,
        // also generally useful for some node.js files
        if ((/^#!/).test(data)) {
            data = data.replace(/^#![^\n]*/, '').trim();
        }
        // Run the tree through uglify-js
        var tree = null;
        try {
            tree = parser.parse(data);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        var global_functions = {};
        var global_variables = {};
        // Traverse the tree finding calls which involve anonymous functions as arguments
        traverse(tree).forEach(function (node) {
            if ((node instanceof Array) && node[0] === 'call') {
                var add = [];
                var args = this.node[constants.CALL_ARGS];
                for (var arg in args) {
                    var newCode = "if (typeof(" + deparse(args[arg]) +") === \'function\') {console.log(\'Function=[" + this.node[constants.CALL_FUNCTION] + "]\')}";
                    add.push(newCode);
                }
                add.push("return " + deparse(this.node) +";");
                var codeToAdd = "(function() {" + add.join(';') +"})()";
                try {
                    codeToAddTree = parser.parse(codeToAdd)[1][0][1];
                    this.update(codeToAddTree, true);
                }
                catch (e) {
                    console.log(e.message);
                    throw e;
                }
            }
            else if ((node instanceof Array) && node[0] === 'assign') {
                if (node[2][0] === 'name') {
                    global_variables[node[2][1]] = node[3];
                }
                else {
                    global_variables[node[2]] = node[3];
                }
            }
            else if ((node instanceof Array) && node[0] === 'var') {
                for (var compound in node[1]) {
                    global_variables[node[1][compound][0]] = node[1][compound][1];
                }
            }
            else if ((node instanceof Array) && node[0] === 'defun') {
                global_functions[node[1]] = [node[2], node[3]];
                ProcessFundef(global_variables, global_functions, node[3], node[1]);
                this.update(node, true);
            }
        });
        //console.log(deparse(tree, true));
        console.log('=== GLOBAL FUNCTIONS ===');
        for (var func in global_functions) {
            console.log(func);
        }
        console.log('=== GLOBAL VARS ===');
        for (var v in global_variables) {
            console.log(v);
        }
    };
    fs.readFile(args[2], 'utf-8',callback);
}
function ProcessFundef(global_vars, global_funcs, body, name) {
    var local_variables = {};
    var local_functions = {};
    traverse(body).forEach(function (node) {
        if ((node instanceof Array) && node[0] === 'call') {
            var add = [];
            var args = this.node[constants.CALL_ARGS];
            for (var arg in args) {
                var newCode = "if (typeof(" + deparse(args[arg]) +") === \'function\') {console.log(\'Function=[" + this.node[constants.CALL_FUNCTION] + "]\')}";
                add.push(newCode);
            }
            add.push("return " + deparse(this.node) +";");
            var codeToAdd = "(function() {" + add.join(';') +"})()";
            try {
                codeToAddTree = parser.parse(codeToAdd)[1][0][1];
                this.update(codeToAddTree, true);
            }
            catch (e) {
                console.log(e.message);
                throw e;
            }
        }
        else if ((node instanceof Array) && node[0] === 'assign') {
            if (node[2][0] === 'name') {
                local_variables[node[2][1]] = node[3];
            }
            else {
                local_variables[node[2]] = node[3];
            }
            this.update(node, true);
        }
        else if ((node instanceof Array) && node[0] === 'var') {
            if (name === 'main') {
                console.log(node[0]);
            }
            for (var compound in node[1]) {
                if (node[1][compound].length > 1 && node[1][compound][1][0] === 'function') {
                    new_node = node[1][compound][1];
                    var new_name = node[1][compound][0];
                    local_functions[new_name] = [new_node[2], new_node[3]];
                    new_global_vars = {};
                    for (var global in global_vars) {
                        new_global_vars[global] = global_vars[global];
                    }
                    for (var local in local_variables) {
                        new_global_vars[local] = local_variables[local];
                    }
                    new_global_funcs = {};
                    for (var global in global_funcs) {
                        new_global_funcs[global] = global_funcs[global];
                    }
                    for (var local in local_functions) {
                        new_global_funcs[local] = local_functions[local];
                    }
                    ProcessFundef(new_global_vars, new_global_funcs, new_node[3], new_name);
                }
                else {
                    local_variables[node[1][compound][0]] = node[1][compound][1];
                }
            }
            this.update(node, true);
        }
        else if ((node instanceof Array) && node[0] === 'defun') {
            local_functions[node[1]] = [node[2], node[3]];
            new_global_vars = {};
            for (var global in global_vars) {
                new_global_vars[global] = global_vars[global];
            }
            for (var local in local_variables) {
                new_global_vars[local] = local_variables[local];
            }
            new_global_funcs = {};
            for (var global in global_funcs) {
                new_global_funcs[global] = global_funcs[global];
            }
            for (var local in local_functions) {
                new_global_funcs[local] = local_functions[local];
            }
            ProcessFundef(new_global_vars, new_global_funcs, node[3], node[1]);
            this.update(node, true);
        }
    });
    console.log('=== LOCAL FUNCTIONS ===  ' +  name);
    for (var func in local_functions) {
        console.log(func);
    }
    console.log('=== LOCAL VARS ===');
    for (var v in local_variables) {
        console.log(v);
    }
}

main(process.argv);
