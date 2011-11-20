console.log("for " + unescape("var%20j%20%3D%200%3B") +  " condition " + unescape("j%20%3C%202") + " incremented as " + unescape("j++"));
((function() {
    console.log("call " + unescape("console.log") + " {");
    console.log("arg[0] " + unescape("%22hello%20world%22"));
    var __tempReturn = function() {
        console.log("load " + unescape("console") + " <" + console + ">");
        return console;
    }.apply(this, []).log("hello world");
    console.log("}");
    return __tempReturn;
})).apply(this, []);

var x = function() {
    console.log("store " + unescape("x") + " " + unescape("%28function%28%29%20%7B%0A%20%20%20%20console.log%28%22hello%20from%20anonymous%20function%22%29%3B%0A%7D%29") + " <" + function() {
        console.log("hello from anonymous function");
    } + ">");
    return function() {
        ((function() {
            console.log("enter function null");
        })).apply(this, []);
        ((function() {
            console.log("call " + unescape("console.log") + " {");
            console.log("arg[0] " + unescape("%22hello%20from%20anonymous%20function%22"));
            var __tempReturn = function() {
                console.log("load " + unescape("console") + " <" + console + ">");
                return console;
            }.apply(this, []).log("hello from anonymous function");
            console.log("}");
            return __tempReturn;
        })).apply(this, []);
    };
}.apply(this, []);

function y(foo) {
    ((function() {
        console.log("enter function y");
    })).apply(this, []);
    ((function() {
        console.log("call " + unescape("console.log") + " {");
        console.log("arg[0] " + unescape("%22hello%20from%20y%20%22%20+%20foo"));
        var __tempReturn = function() {
            console.log("load " + unescape("console") + " <" + console + ">");
            return console;
        }.apply(this, []).log(function() {
            console.log("call " + unescape("+") + " {");
            console.log("arg[0] " + unescape("%22hello%20from%20y%20%22"));
            console.log("arg[1] " + unescape("foo"));
            var __tempReturn = "hello from y " + function() {
                console.log("load " + unescape("foo") + " <" + foo + ">");
                return foo;
            }.apply(this, []);
            console.log("}");
            return __tempReturn;
        }.apply(this, []));
        console.log("}");
        return __tempReturn;
    })).apply(this, []);
    for (var i in [ 1, 2, 3 ]) {
        console.log("for-in " + unescape("i") + " <" + i + ">  in " + unescape("%5B%201%2C%202%2C%203%20%5D"));
        ((function() {
            console.log("call " + unescape("console.log") + " {");
            console.log("arg[0] " + unescape("i"));
            var __tempReturn = function() {
                console.log("load " + unescape("console") + " <" + console + ">");
                return console;
            }.apply(this, []).log(function() {
                console.log("load " + unescape("i") + " <" + i + ">");
                return i;
            }.apply(this, []));
            console.log("}");
            return __tempReturn;
        })).apply(this, []);
    }
    for (var j = 0; j < 2; j++) {
        console.log("for " + unescape("var%20j%20%3D%200%3B") + " condition " + unescape("j%20%3C%202") + " incremented as " + unescape("j++"));
        ((function() {
            console.log("call " + unescape("console.log") + " {");
            console.log("arg[0] " + unescape("j"));
            var __tempReturn = function() {
                console.log("load " + unescape("console") + " <" + console + ">");
                return console;
            }.apply(this, []).log(function() {
                console.log("load " + unescape("j") + " <" + j + ">");
                return j;
            }.apply(this, []));
            console.log("}");
            return __tempReturn;
        })).apply(this, []);
    }
}

((function() {
    console.log("call " + unescape("x") + " {");
    var __tempReturn = function() {
        console.log("load " + unescape("x") + " <" + x + ">");
        return x;
    }.apply(this, [])();
    console.log("}");
    return __tempReturn;
})).apply(this, []);

((function() {
    console.log("call " + unescape("y") + " {");
    console.log("arg[0] " + unescape("%22bar%22"));
    var __tempReturn = function() {
        console.log("load " + unescape("y") + " <" + y + ">");
        return y;
    }.apply(this, [])("bar");
    console.log("}");
    return __tempReturn;
})).apply(this, []);
