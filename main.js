#!/usr/bin/env node
uglify = require('uglify-js'),
fs = require('fs'),
parser = uglify.parser;

function main(args) {
    if (args.length != 3) {
        console.log('Usage main.js <filename>, given ' + args.join(' '));
        return;
    }
    fs.readFile(args[2], 'utf-8',function (err, data) {
        if (err) throw err;
        if ((/^#!/).test(data)) {
            data = data.replace(/^#![^\n]*/, '').trim();
        }
        try {
            tree = parser.parse(data);
        }
        catch (e) {
            console.log('Error');
            console.log(e.message);
        }
        console.log('Successfully parsed data');
    });
}

main(process.argv);
