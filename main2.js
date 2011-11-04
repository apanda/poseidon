#!/usr/bin/env node
var uglify = require('uglify-js'),
    fs = require('fs'),
    traverse = require('traverse'),
    assert = require('assert'),
    us = require('underscore')._,
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
    if (b === undefined) {
        b = true;
    }
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
        traverse(tree).forEach(ModifyAndTraverse);
        console.log(deparse(tree, true));
    };
    fs.readFile(args[2], 'utf-8',callback);
}

function ModifyAndTraverse(node) {
    if ((node instanceof Array) && node[0] === 'call') {
        var add = [];
        var args = this.node[constants.CALL_ARGS];
        for (var arg in args) {
            add.push('console.log("arg' + arg + ' " + unescape("' + escape(deparse(args[arg])) + '"))');
        }
        var func = this.node[constants.CALL_FUNCTION];
        add.push('console.log("call " + unescape("' + escape(deparse(func)) + '"))');
        args = traverse(args).map(ModifyAndTraverse);
        func = traverse(func).map(ModifyAndTraverse);
        add.push("return " + deparse([this.node[0], func, args]) +";");
        var codeToAdd = "(function() {" + add.join(';') +"}).apply(this, [])";
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
        /*if (node[2][0] === 'name') {
            global_variables[node[2][1]] = node[3];
        }
        else {
            global_variables[node[2]] = node[3];
        }*/
        var rhs = node[3];
        var newcode = '(function() { console.log("store " + unescape("' + escape(deparse(node[2])) + '") + " " + unescape("' + escape(deparse(rhs)) + '"));' ;
        rhs = traverse(rhs).map(ModifyAndTraverse);
        newcode = newcode + ' return ' + deparse(rhs) + ';}).apply(this, []);';
        try {
            codeToAddTree = parser.parse(newcode)[1][0][1];
            this.update([node[0],node[1], node[2], codeToAddTree], true);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
    }
    else if ((node instanceof Array) && node[0] === 'var') {
        for (var compound in node[1]) {
            //global_variables[node[1][compound][0]] = node[1][compound][1];
        }
    }
    /*else if ((node instanceof Array) && node[0] === 'defun') {
        global_functions[node[1]] = [node[2], node[3]];
        //ProcessFundef(global_variables, global_functions, node[3], node[1]);
        this.update(node, true);
    }*/
}        

main(process.argv);
