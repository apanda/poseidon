#!/usr/bin/env node
var uglify = require('uglify-js'),
    fs = require('fs'),
    traverse = require('traverse'),
    assert = require('assert'),
    us = require('underscore')._,
    parser = uglify.parser;
// Define us some constants since constants are good
var constants = {
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
        var func = this.node[constants.CALL_FUNCTION];
        add.push('console.log("call " + unescape("' + escape(deparse(func)) + '") + " {")');
        for (var arg in args) {
            add.push('console.log("arg[' + arg + '] " + unescape("' + escape(deparse(args[arg])) + '"))');
        }
        args = traverse(args).map(ModifyAndTraverse);
        func = traverse(func).map(ModifyAndTraverse);
        add.push("var __tempReturn =  " + deparse([this.node[0], func, args]) +";");
        add.push('console.log("}")');
        add.push('return __tempReturn');
        var codeToAdd = "(function() {" + add.join(';') +"}).apply(this, [])";
        try {
            var codeToAddTree = parser.parse(codeToAdd)[1][0][1];
            this.update(codeToAddTree, true);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
    }
    else if ((node instanceof Array) && node[0] === 'assign') {
        var rhs = node[3];
        var newcode = '(function() { console.log("store " + unescape("' + escape(deparse(node[2])) + '") + " " + unescape("' + escape(deparse(rhs)) + '") + " <" + ' + deparse(rhs) + ' + ">");' ;
        rhs = traverse(rhs).map(ModifyAndTraverse);
        newcode = newcode + ' return ' + deparse(rhs) + ';}).apply(this, []);';
        try {
            var codeToAddTree = parser.parse(newcode)[1][0][1];
            this.update([node[0],node[1], node[2], codeToAddTree], true);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
    }
    else if ((node instanceof Array) && node[0] === 'var') {
        var nodes = [];
        for (var compound in node[1]) {
            var rhs = node[1][compound][1];
            var newcode = '(function() { console.log("store " + unescape("' + escape(node[1][compound][0]) + '") + " " + unescape("' + escape(deparse(rhs)) + '") + " <" + ' + deparse(rhs) + ' +  ">");' ;
            rhs = traverse(rhs).map(ModifyAndTraverse);
            newcode = newcode + ' return ' + deparse(rhs) + ';}).apply(this, []);';
            try {
                var codeToAddTree = parser.parse(newcode)[1][0][1];
                nodes.push([node[1][compound][0], codeToAddTree]);
                //this.update([node[0],node[1], node[2], codeToAddTree], true);
            }
            catch (e) {
                console.log(e.message);
                throw e;
            }
        }
        this.update([node[0], nodes], true);
    }
    else if ((node instanceof Array) && node[0] === 'name') {
        var newcode = '(function() {console.log("load " + unescape("' + escape(deparse(node, true)) + '") + " <" + ' + deparse(node) + ' + ">"); return ' + deparse(node) + ';}).apply(this, []);';
        try {
            node = parser.parse(newcode)[1][0][1];
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        this.update(node, true);
    }
    else if ((node instanceof Array) && node[0] === 'binary') {
        var add = [];
        var args = [this.node[2], this.node[3]];
        var func = this.node[1];
        add.push('console.log("call " + unescape("' + escape(func) + '") + " {")');
        for (var arg in args) {
            add.push('console.log("arg[' + arg + '] " + unescape("' + escape(deparse(args[arg])) + '"))');
        }
        args = traverse(args).map(ModifyAndTraverse);
        add.push("var __tempReturn = " + deparse([this.node[0], this.node[1], args[0], args[1]]) +";");
        add.push('console.log("}")')
        add.push('return __tempReturn');
        var codeToAdd = "(function() {" + add.join(';') +"}).apply(this, [])";
        try {
            var codeToAddTree = parser.parse(codeToAdd)[1][0][1];
            this.update(codeToAddTree, true);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
    }
    else if ((node instanceof Array) && (node[0] === 'defun' || node[0] === 'function')) {
        var modifiedBody = traverse(node[3]).map(ModifyAndTraverse);
        var codeToAdd = ['console.log("enter function ' + node[1] + '")'];
        for (var arg in node[2]) {
            codeToAdd.push['console.log("' + node[2][arg] + ' = arg[' + arg + ']")'];
        }
        var codeToAddString = "(function() {" + codeToAdd.join(';') + "}).apply(this, []);";
        try {
            var codeToAddTree = parser.parse(codeToAddString)[1][0];
            modifiedBody.splice(0, 0, codeToAddTree);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        this.update([node[0],node[1],node[2],modifiedBody], true);
    }
    else if ((node instanceof Array) && (node[0] === 'for-in')) {
        var modifiedInit = node[1];//traverse(node[1]).map(ModifyAndTraverse);
        var codeToAdd = 'console.log("for-in " + unescape("' + escape(deparse(node[2])) + '") + " <" + ' + deparse(node[2]) + ' + ">  in " + unescape("' + escape(deparse(node[3])) + '"));';
        var modifiedCollection = traverse(node[3]).map(ModifyAndTraverse);
        var modifiedBody = traverse(node[4]).map(ModifyAndTraverse);
        try {
            var codeToAddTree = parser.parse(codeToAdd)[1][0];
            modifiedBody[1].splice(0, 0, codeToAddTree);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        this.update([node[0],modifiedInit, node[2], modifiedCollection, modifiedBody], true);
    }
    else if ((node instanceof Array) && (node[0] == 'for')) {
        var modifiedInit = node[1];//traverse(node[1]).map(ModifyAndTraverse);
        var codeToAdd = 'console.log("for " + unescape("' + escape(deparse(node[1])) + '") +  " condition " + unescape("' + escape(deparse(node[2])) + 
                            '") + " incremented as " + unescape("' + escape(deparse(node[3])) + '"));';
        console.log(codeToAdd);
        //var modifiedCollection = traverse(node[3]).map(ModifyAndTraverse);
        var modifiedBody = traverse(node[4]).map(ModifyAndTraverse);
        try {
            var codeToAddTree = parser.parse(codeToAdd)[1][0];
            modifiedBody[1].splice(0, 0, codeToAddTree);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        this.update([node[0],modifiedInit, node[2], node[3], modifiedBody], true);
    }
}        

main(process.argv);
