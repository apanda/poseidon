console.log('hello world');
var x = function() {
    console.log('hello from anonymous function');
};
function y(foo) {
    console.log('hello from y ' + foo);
    for (var i in [1,2,3]) {
        console.log(i);
    }
    for (var j = 0; j < 2; j++) {
        console.log(j);
    }
}
x();
y('bar');
