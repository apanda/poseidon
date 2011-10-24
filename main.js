#!/usr/bin/env node
uglify = require('uglify-js'),
fs = require('fs'),
traverse = require('traverse'),
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
            if (node === 'call') {
                console.log(this.parent.key);
                var callbacks = 
                    traverse(this.parent.node).reduce(
                        function (acc, node) {
                            if (node === 'function') {
                                acc.push(this.parent.node);
                            }
                            return acc;
                        }, []);
                if (callbacks.length > 0) {
                    console.log("Function = ", this.parent.node[constants.CALL_FUNCTION]);
                }
                var add = [];
                var args = this.parent.node[constants.CALL_ARGS];
                for (var arg in args) {
                    var newCode = "if (typeof(" + deparse(args[arg]) +") === \'function\') {console.log(\'Function=[" + this.parent.node[constants.CALL_FUNCTION] + "]\')}";
                    try {
                        parsed = parser.parse(newCode);
                        parsed = parsed[1][0];
                        add.push(parsed);
                    }
                    catch (e) {
                        console.log("Error " + e.message);
                        throw e;
                    }
                }
                spliceArgs = [this.parent.key, add.length];
                for (var elt in add) {
                    console.log(add[elt]);
                    spliceArgs.push(add[elt]);
                }
            }
        });
    };
    fs.readFile(args[2], 'utf-8',callback);
}

main(process.argv);
