#!/usr/bin/env node
console.log('hello world');
var x = function() {
    console.log('hello from anonymous function');
};
function y() {
    console.log('hello from y');
}
x();
y();
