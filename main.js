#!/usr/bin/env node
uglify = require('uglify-js'),
fs = require('fs'),
traverse = require('traverse'),
parser = uglify.parser;
// Define us some constants since constants are good
constants = {
    CALL_FUNCTION: 1,
    CALL_ARGS: 2
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
        tree = null;
        try {
            tree = parser.parse(data);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        // Traverse the tree finding calls which involve anonymous functions as arguments
        traverse(tree).forEach(function (node) {
            if (node === 'call') {
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
            }
        });
    };
    fs.readFile(args[2], 'utf-8',callback);
}

main(process.argv);
