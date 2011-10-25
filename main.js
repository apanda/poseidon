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
        var assignees = {}
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
        });
        console.log(deparse(tree, true));
    };
    fs.readFile(args[2], 'utf-8',callback);
}

main(process.argv);
