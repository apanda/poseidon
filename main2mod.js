var uglify = function() {
    console.log("store " + unescape("uglify") + " " + unescape("require%28%22uglify-js%22%29") + " <" + require("uglify-js") + ">");
    return function() {
        console.log("arg0 " + unescape("%22uglify-js%22"));
        console.log("call " + unescape("require"));
        return function() {
            console.log("load " + unescape("require") + " <" + require + ">");
            return require;
        }.apply(this, [])("uglify-js");
    }.apply(this, []);
}.apply(this, []), fs = function() {
    console.log("store " + unescape("fs") + " " + unescape("require%28%22fs%22%29") + " <" + require("fs") + ">");
    return function() {
        console.log("arg0 " + unescape("%22fs%22"));
        console.log("call " + unescape("require"));
        return function() {
            console.log("load " + unescape("require") + " <" + require + ">");
            return require;
        }.apply(this, [])("fs");
    }.apply(this, []);
}.apply(this, []), traverse = function() {
    console.log("store " + unescape("traverse") + " " + unescape("require%28%22traverse%22%29") + " <" + require("traverse") + ">");
    return function() {
        console.log("arg0 " + unescape("%22traverse%22"));
        console.log("call " + unescape("require"));
        return function() {
            console.log("load " + unescape("require") + " <" + require + ">");
            return require;
        }.apply(this, [])("traverse");
    }.apply(this, []);
}.apply(this, []), assert = function() {
    console.log("store " + unescape("assert") + " " + unescape("require%28%22assert%22%29") + " <" + require("assert") + ">");
    return function() {
        console.log("arg0 " + unescape("%22assert%22"));
        console.log("call " + unescape("require"));
        return function() {
            console.log("load " + unescape("require") + " <" + require + ">");
            return require;
        }.apply(this, [])("assert");
    }.apply(this, []);
}.apply(this, []), us = function() {
    console.log("store " + unescape("us") + " " + unescape("require%28%22underscore%22%29._") + " <" + require("underscore")._ + ">");
    return function() {
        console.log("arg0 " + unescape("%22underscore%22"));
        console.log("call " + unescape("require"));
        return function() {
            console.log("load " + unescape("require") + " <" + require + ">");
            return require;
        }.apply(this, [])("underscore");
    }.apply(this, [])._;
}.apply(this, []), parser = function() {
    console.log("store " + unescape("parser") + " " + unescape("uglify.parser") + " <" + uglify.parser + ">");
    return function() {
        console.log("load " + unescape("uglify") + " <" + uglify + ">");
        return uglify;
    }.apply(this, []).parser;
}.apply(this, []);

var constants = function() {
    console.log("store " + unescape("constants") + " " + unescape("%7B%0A%20%20%20%20CALL_FUNCTION%3A%201%2C%0A%20%20%20%20CALL_ARGS%3A%202%2C%0A%20%20%20%20ASSIGN_TYPE%3A%201%2C%0A%20%20%20%20ASSIGN_LHS%3A%202%2C%0A%20%20%20%20ASSIGN_RHS%3A%203%0A%7D") + " <" + {
        CALL_FUNCTION: 1,
        CALL_ARGS: 2,
        ASSIGN_TYPE: 1,
        ASSIGN_LHS: 2,
        ASSIGN_RHS: 3
    } + ">");
    return {
        CALL_FUNCTION: 1,
        CALL_ARGS: 2,
        ASSIGN_TYPE: 1,
        ASSIGN_LHS: 2,
        ASSIGN_RHS: 3
    };
}.apply(this, []);

var deparse = function() {
    console.log("store " + unescape("deparse") + " " + unescape("%28function%28ast%2C%20b%29%20%7B%0A%20%20%20%20if%20%28b%20%3D%3D%3D%20undefined%29%20%7B%0A%20%20%20%20%20%20%20%20b%20%3D%20true%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20uglify.uglify.gen_code%28ast%2C%20%7B%0A%20%20%20%20%20%20%20%20beautify%3A%20b%0A%20%20%20%20%7D%29%3B%0A%7D%29") + " <" + function(ast, b) {
        if (b === undefined) {
            b = true;
        }
        return uglify.uglify.gen_code(ast, {
            beautify: b
        });
    } + ">");
    return function(ast, b) {
        console.log("enter function null");
        if (function() {
            console.log("arg0 " + unescape("b"));
            console.log("arg1 " + unescape("undefined"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("b") + " <" + b + ">");
                return b;
            }.apply(this, []) === function() {
                console.log("load " + unescape("undefined") + " <" + undefined + ">");
                return undefined;
            }.apply(this, []);
        }.apply(this, [])) {
            b = function() {
                console.log("store " + unescape("b") + " " + unescape("true") + " <" + true + ">");
                return function() {
                    console.log("load " + unescape("true") + " <" + true + ">");
                    return true;
                }.apply(this, []);
            }.apply(this, []);
        }
        return function() {
            console.log("arg0 " + unescape("ast"));
            console.log("arg1 " + unescape("%7B%0A%20%20%20%20beautify%3A%20b%0A%7D"));
            console.log("call " + unescape("uglify.uglify.gen_code"));
            return function() {
                console.log("load " + unescape("uglify") + " <" + uglify + ">");
                return uglify;
            }.apply(this, []).uglify.gen_code(function() {
                console.log("load " + unescape("ast") + " <" + ast + ">");
                return ast;
            }.apply(this, []), {
                beautify: function() {
                    console.log("load " + unescape("b") + " <" + b + ">");
                    return b;
                }.apply(this, [])
            });
        }.apply(this, []);
    };
}.apply(this, []);

function main(args) {
    console.log("enter function main");
    if (function() {
        console.log("arg0 " + unescape("args.length"));
        console.log("arg1 " + unescape("3"));
        console.log("call " + unescape("%21%3D"));
        return function() {
            console.log("load " + unescape("args") + " <" + args + ">");
            return args;
        }.apply(this, []).length != 3;
    }.apply(this, [])) {
        ((function() {
            console.log("arg0 " + unescape("%22Usage%20main.js%20%3Cfilename%3E%2C%20given%20%22%20+%20args.join%28%22%20%22%29"));
            console.log("call " + unescape("console.log"));
            return function() {
                console.log("load " + unescape("console") + " <" + console + ">");
                return console;
            }.apply(this, []).log(function() {
                console.log("arg0 " + unescape("%22Usage%20main.js%20%3Cfilename%3E%2C%20given%20%22"));
                console.log("arg1 " + unescape("args.join%28%22%20%22%29"));
                console.log("call " + unescape("+"));
                return "Usage main.js <filename>, given " + function() {
                    console.log("arg0 " + unescape("%22%20%22"));
                    console.log("call " + unescape("args.join"));
                    return function() {
                        console.log("load " + unescape("args") + " <" + args + ">");
                        return args;
                    }.apply(this, []).join(" ");
                }.apply(this, []);
            }.apply(this, []));
        })).apply(this, []);
        return;
    }
    var callback = function() {
        console.log("store " + unescape("callback") + " " + unescape("%28function%28err%2C%20data%29%20%7B%0A%20%20%20%20if%20%28err%29%20throw%20err%3B%0A%20%20%20%20if%20%28/%5E%23%21/.test%28data%29%29%20%7B%0A%20%20%20%20%20%20%20%20data%20%3D%20data.replace%28/%5E%23%21%5B%5E%5Cn%5D*/%2C%20%22%22%29.trim%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20var%20tree%20%3D%20null%3B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20tree%20%3D%20parser.parse%28data%29%3B%0A%20%20%20%20%7D%20catch%20%28e%29%20%7B%0A%20%20%20%20%20%20%20%20console.log%28e.message%29%3B%0A%20%20%20%20%20%20%20%20throw%20e%3B%0A%20%20%20%20%7D%0A%20%20%20%20var%20global_functions%20%3D%20%7B%7D%3B%0A%20%20%20%20var%20global_variables%20%3D%20%7B%7D%3B%0A%20%20%20%20traverse%28tree%29.forEach%28ModifyAndTraverse%29%3B%0A%20%20%20%20console.log%28deparse%28tree%2C%20true%29%29%3B%0A%7D%29") + " <" + function(err, data) {
            if (err) throw err;
            if (/^#!/.test(data)) {
                data = data.replace(/^#![^\n]*/, "").trim();
            }
            var tree = null;
            try {
                tree = parser.parse(data);
            } catch (e) {
                console.log(e.message);
                throw e;
            }
            var global_functions = {};
            var global_variables = {};
            traverse(tree).forEach(ModifyAndTraverse);
            console.log(deparse(tree, true));
        } + ">");
        return function(err, data) {
            console.log("enter function null");
            if (function() {
                console.log("load " + unescape("err") + " <" + err + ">");
                return err;
            }.apply(this, [])) throw function() {
                console.log("load " + unescape("err") + " <" + err + ">");
                return err;
            }.apply(this, []);
            if (function() {
                console.log("arg0 " + unescape("data"));
                console.log("call " + unescape("/%5E%23%21/.test"));
                return /^#!/.test(function() {
                    console.log("load " + unescape("data") + " <" + data + ">");
                    return data;
                }.apply(this, []));
            }.apply(this, [])) {
                data = function() {
                    console.log("store " + unescape("data") + " " + unescape("data.replace%28/%5E%23%21%5B%5E%5Cn%5D*/%2C%20%22%22%29.trim%28%29") + " <" + data.replace(/^#![^\n]*/, "").trim() + ">");
                    return function() {
                        console.log("call " + unescape("data.replace%28/%5E%23%21%5B%5E%5Cn%5D*/%2C%20%22%22%29.trim"));
                        return function() {
                            console.log("arg0 " + unescape("/%5E%23%21%5B%5E%5Cn%5D*/"));
                            console.log("arg1 " + unescape("%22%22"));
                            console.log("call " + unescape("data.replace"));
                            return function() {
                                console.log("load " + unescape("data") + " <" + data + ">");
                                return data;
                            }.apply(this, []).replace(/^#![^\n]*/, "");
                        }.apply(this, []).trim();
                    }.apply(this, []);
                }.apply(this, []);
            }
            var tree = function() {
                console.log("store " + unescape("tree") + " " + unescape("null") + " <" + null + ">");
                return function() {
                    console.log("load " + unescape("null") + " <" + null + ">");
                    return null;
                }.apply(this, []);
            }.apply(this, []);
            try {
                tree = function() {
                    console.log("store " + unescape("tree") + " " + unescape("parser.parse%28data%29") + " <" + parser.parse(data) + ">");
                    return function() {
                        console.log("arg0 " + unescape("data"));
                        console.log("call " + unescape("parser.parse"));
                        return function() {
                            console.log("load " + unescape("parser") + " <" + parser + ">");
                            return parser;
                        }.apply(this, []).parse(function() {
                            console.log("load " + unescape("data") + " <" + data + ">");
                            return data;
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []);
            } catch (e) {
                ((function() {
                    console.log("arg0 " + unescape("e.message"));
                    console.log("call " + unescape("console.log"));
                    return function() {
                        console.log("load " + unescape("console") + " <" + console + ">");
                        return console;
                    }.apply(this, []).log(function() {
                        console.log("load " + unescape("e") + " <" + e + ">");
                        return e;
                    }.apply(this, []).message);
                })).apply(this, []);
                throw function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []);
            }
            var global_functions = function() {
                console.log("store " + unescape("global_functions") + " " + unescape("%7B%7D") + " <" + {} + ">");
                return {};
            }.apply(this, []);
            var global_variables = function() {
                console.log("store " + unescape("global_variables") + " " + unescape("%7B%7D") + " <" + {} + ">");
                return {};
            }.apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28tree%29.forEach"));
                return function() {
                    console.log("arg0 " + unescape("tree"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("tree") + " <" + tree + ">");
                        return tree;
                    }.apply(this, []));
                }.apply(this, []).forEach(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            })).apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("deparse%28tree%2C%20true%29"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("arg0 " + unescape("tree"));
                    console.log("arg1 " + unescape("true"));
                    console.log("call " + unescape("deparse"));
                    return function() {
                        console.log("load " + unescape("deparse") + " <" + deparse + ">");
                        return deparse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("tree") + " <" + tree + ">");
                        return tree;
                    }.apply(this, []), function() {
                        console.log("load " + unescape("true") + " <" + true + ">");
                        return true;
                    }.apply(this, []));
                }.apply(this, []));
            })).apply(this, []);
        };
    }.apply(this, []);
    ((function() {
        console.log("arg0 " + unescape("args%5B2%5D"));
        console.log("arg1 " + unescape("%22utf-8%22"));
        console.log("arg2 " + unescape("callback"));
        console.log("call " + unescape("fs.readFile"));
        return function() {
            console.log("load " + unescape("fs") + " <" + fs + ">");
            return fs;
        }.apply(this, []).readFile(function() {
            console.log("load " + unescape("args") + " <" + args + ">");
            return args;
        }.apply(this, [])[2], "utf-8", function() {
            console.log("load " + unescape("callback") + " <" + callback + ">");
            return callback;
        }.apply(this, []));
    })).apply(this, []);
}

function ModifyAndTraverse(node) {
    console.log("enter function ModifyAndTraverse");
    if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22call%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D"));
            console.log("arg1 " + unescape("%22call%22"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0] === "call";
        }.apply(this, []);
    }.apply(this, [])) {
        var add = function() {
            console.log("store " + unescape("add") + " " + unescape("%5B%5D") + " <" + [] + ">");
            return [];
        }.apply(this, []);
        var args = function() {
            console.log("store " + unescape("args") + " " + unescape("this.node%5Bconstants.CALL_ARGS%5D") + " <" + this.node[constants.CALL_ARGS] + ">");
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).node[function() {
                console.log("load " + unescape("constants") + " <" + constants + ">");
                return constants;
            }.apply(this, []).CALL_ARGS];
        }.apply(this, []);
        for (var arg = function() {
            console.log("store " + unescape("arg") + " " + unescape("null") + " <" + null + ">");
            return null;
        }.apply(this, []) in function() {
            console.log("load " + unescape("args") + " <" + args + ">");
            return args;
        }.apply(this, [])) {
            ((function() {
                console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28args%5Barg%5D%29%29%20+%20%27%22%29%29%27"));
                console.log("call " + unescape("add.push"));
                return function() {
                    console.log("load " + unescape("add") + " <" + add + ">");
                    return add;
                }.apply(this, []).push(function() {
                    console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28args%5Barg%5D%29%29"));
                    console.log("arg1 " + unescape("%27%22%29%29%27"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27"));
                        console.log("arg1 " + unescape("escape%28deparse%28args%5Barg%5D%29%29"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg"));
                            console.log("arg1 " + unescape("%27%20%22%20+%20unescape%28%22%27"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("arg0 " + unescape("%27console.log%28%22arg%27"));
                                console.log("arg1 " + unescape("arg"));
                                console.log("call " + unescape("+"));
                                return 'console.log("arg' + function() {
                                    console.log("load " + unescape("arg") + " <" + arg + ">");
                                    return arg;
                                }.apply(this, []);
                            }.apply(this, []) + ' " + unescape("';
                        }.apply(this, []) + function() {
                            console.log("arg0 " + unescape("deparse%28args%5Barg%5D%29"));
                            console.log("call " + unescape("escape"));
                            return function() {
                                console.log("load " + unescape("escape") + " <" + escape + ">");
                                return escape;
                            }.apply(this, [])(function() {
                                console.log("arg0 " + unescape("args%5Barg%5D"));
                                console.log("call " + unescape("deparse"));
                                return function() {
                                    console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                    return deparse;
                                }.apply(this, [])(function() {
                                    console.log("load " + unescape("args") + " <" + args + ">");
                                    return args;
                                }.apply(this, [])[function() {
                                    console.log("load " + unescape("arg") + " <" + arg + ">");
                                    return arg;
                                }.apply(this, [])]);
                            }.apply(this, []));
                        }.apply(this, []);
                    }.apply(this, []) + '"))';
                }.apply(this, []));
            })).apply(this, []);
        }
        var func = function() {
            console.log("store " + unescape("func") + " " + unescape("this.node%5Bconstants.CALL_FUNCTION%5D") + " <" + this.node[constants.CALL_FUNCTION] + ">");
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).node[function() {
                console.log("load " + unescape("constants") + " <" + constants + ">");
                return constants;
            }.apply(this, []).CALL_FUNCTION];
        }.apply(this, []);
        ((function() {
            console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28func%29%29%20+%20%27%22%29%29%27"));
            console.log("call " + unescape("add.push"));
            return function() {
                console.log("load " + unescape("add") + " <" + add + ">");
                return add;
            }.apply(this, []).push(function() {
                console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28func%29%29"));
                console.log("arg1 " + unescape("%27%22%29%29%27"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27"));
                    console.log("arg1 " + unescape("escape%28deparse%28func%29%29"));
                    console.log("call " + unescape("+"));
                    return 'console.log("call " + unescape("' + function() {
                        console.log("arg0 " + unescape("deparse%28func%29"));
                        console.log("call " + unescape("escape"));
                        return function() {
                            console.log("load " + unescape("escape") + " <" + escape + ">");
                            return escape;
                        }.apply(this, [])(function() {
                            console.log("arg0 " + unescape("func"));
                            console.log("call " + unescape("deparse"));
                            return function() {
                                console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                return deparse;
                            }.apply(this, [])(function() {
                                console.log("load " + unescape("func") + " <" + func + ">");
                                return func;
                            }.apply(this, []));
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []) + '"))';
            }.apply(this, []));
        })).apply(this, []);
        args = function() {
            console.log("store " + unescape("args") + " " + unescape("traverse%28args%29.map%28ModifyAndTraverse%29") + " <" + traverse(args).map(ModifyAndTraverse) + ">");
            return function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28args%29.map"));
                return function() {
                    console.log("arg0 " + unescape("args"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("args") + " <" + args + ">");
                        return args;
                    }.apply(this, []));
                }.apply(this, []).map(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            }.apply(this, []);
        }.apply(this, []);
        func = function() {
            console.log("store " + unescape("func") + " " + unescape("traverse%28func%29.map%28ModifyAndTraverse%29") + " <" + traverse(func).map(ModifyAndTraverse) + ">");
            return function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28func%29.map"));
                return function() {
                    console.log("arg0 " + unescape("func"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("func") + " <" + func + ">");
                        return func;
                    }.apply(this, []));
                }.apply(this, []).map(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            }.apply(this, []);
        }.apply(this, []);
        ((function() {
            console.log("arg0 " + unescape("%22return%20%22%20+%20deparse%28%5B%20this.node%5B0%5D%2C%20func%2C%20args%20%5D%29%20+%20%22%3B%22"));
            console.log("call " + unescape("add.push"));
            return function() {
                console.log("load " + unescape("add") + " <" + add + ">");
                return add;
            }.apply(this, []).push(function() {
                console.log("arg0 " + unescape("%22return%20%22%20+%20deparse%28%5B%20this.node%5B0%5D%2C%20func%2C%20args%20%5D%29"));
                console.log("arg1 " + unescape("%22%3B%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%22return%20%22"));
                    console.log("arg1 " + unescape("deparse%28%5B%20this.node%5B0%5D%2C%20func%2C%20args%20%5D%29"));
                    console.log("call " + unescape("+"));
                    return "return " + function() {
                        console.log("arg0 " + unescape("%5B%20this.node%5B0%5D%2C%20func%2C%20args%20%5D"));
                        console.log("call " + unescape("deparse"));
                        return function() {
                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                            return deparse;
                        }.apply(this, [])([ function() {
                            console.log("load " + unescape("this") + " <" + this + ">");
                            return this;
                        }.apply(this, []).node[0], function() {
                            console.log("load " + unescape("func") + " <" + func + ">");
                            return func;
                        }.apply(this, []), function() {
                            console.log("load " + unescape("args") + " <" + args + ">");
                            return args;
                        }.apply(this, []) ]);
                    }.apply(this, []);
                }.apply(this, []) + ";";
            }.apply(this, []));
        })).apply(this, []);
        var codeToAdd = function() {
            console.log("store " + unescape("codeToAdd") + " " + unescape("%22%28function%28%29%20%7B%22%20+%20add.join%28%22%3B%22%29%20+%20%22%7D%29.apply%28this%2C%20%5B%5D%29%22") + " <" + "(function() {" + add.join(";") + "}).apply(this, [])" + ">");
            return function() {
                console.log("arg0 " + unescape("%22%28function%28%29%20%7B%22%20+%20add.join%28%22%3B%22%29"));
                console.log("arg1 " + unescape("%22%7D%29.apply%28this%2C%20%5B%5D%29%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%22%28function%28%29%20%7B%22"));
                    console.log("arg1 " + unescape("add.join%28%22%3B%22%29"));
                    console.log("call " + unescape("+"));
                    return "(function() {" + function() {
                        console.log("arg0 " + unescape("%22%3B%22"));
                        console.log("call " + unescape("add.join"));
                        return function() {
                            console.log("load " + unescape("add") + " <" + add + ">");
                            return add;
                        }.apply(this, []).join(";");
                    }.apply(this, []);
                }.apply(this, []) + "}).apply(this, [])";
            }.apply(this, []);
        }.apply(this, []);
        try {
            var codeToAddTree = function() {
                console.log("store " + unescape("codeToAddTree") + " " + unescape("parser.parse%28codeToAdd%29%5B1%5D%5B0%5D%5B1%5D") + " <" + parser.parse(codeToAdd)[1][0][1] + ">");
                return function() {
                    console.log("arg0 " + unescape("codeToAdd"));
                    console.log("call " + unescape("parser.parse"));
                    return function() {
                        console.log("load " + unescape("parser") + " <" + parser + ">");
                        return parser;
                    }.apply(this, []).parse(function() {
                        console.log("load " + unescape("codeToAdd") + " <" + codeToAdd + ">");
                        return codeToAdd;
                    }.apply(this, []));
                }.apply(this, [])[1][0][1];
            }.apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("codeToAddTree"));
                console.log("arg1 " + unescape("true"));
                console.log("call " + unescape("this.update"));
                return function() {
                    console.log("load " + unescape("this") + " <" + this + ">");
                    return this;
                }.apply(this, []).update(function() {
                    console.log("load " + unescape("codeToAddTree") + " <" + codeToAddTree + ">");
                    return codeToAddTree;
                }.apply(this, []), function() {
                    console.log("load " + unescape("true") + " <" + true + ">");
                    return true;
                }.apply(this, []));
            })).apply(this, []);
        } catch (e) {
            ((function() {
                console.log("arg0 " + unescape("e.message"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []).message);
            })).apply(this, []);
            throw function() {
                console.log("load " + unescape("e") + " <" + e + ">");
                return e;
            }.apply(this, []);
        }
    } else if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22assign%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D"));
            console.log("arg1 " + unescape("%22assign%22"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0] === "assign";
        }.apply(this, []);
    }.apply(this, [])) {
        var rhs = function() {
            console.log("store " + unescape("rhs") + " " + unescape("node%5B3%5D") + " <" + node[3] + ">");
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[3];
        }.apply(this, []);
        var newcode = function() {
            console.log("store " + unescape("newcode") + " " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28rhs%29%20+%20%27%20+%20%22%3E%22%29%3B%27") + " <" + '(function() { console.log("store " + unescape("' + escape(deparse(node[2])) + '") + " " + unescape("' + escape(deparse(rhs)) + '") + " <" + ' + deparse(rhs) + ' + ">");' + ">");
            return function() {
                console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28rhs%29"));
                console.log("arg1 " + unescape("%27%20+%20%22%3E%22%29%3B%27"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                    console.log("arg1 " + unescape("deparse%28rhs%29"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29"));
                        console.log("arg1 " + unescape("%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27"));
                            console.log("arg1 " + unescape("escape%28deparse%28rhs%29%29"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%5B2%5D%29%29"));
                                console.log("arg1 " + unescape("%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27"));
                                console.log("call " + unescape("+"));
                                return function() {
                                    console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27"));
                                    console.log("arg1 " + unescape("escape%28deparse%28node%5B2%5D%29%29"));
                                    console.log("call " + unescape("+"));
                                    return '(function() { console.log("store " + unescape("' + function() {
                                        console.log("arg0 " + unescape("deparse%28node%5B2%5D%29"));
                                        console.log("call " + unescape("escape"));
                                        return function() {
                                            console.log("load " + unescape("escape") + " <" + escape + ">");
                                            return escape;
                                        }.apply(this, [])(function() {
                                            console.log("arg0 " + unescape("node%5B2%5D"));
                                            console.log("call " + unescape("deparse"));
                                            return function() {
                                                console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                                return deparse;
                                            }.apply(this, [])(function() {
                                                console.log("load " + unescape("node") + " <" + node + ">");
                                                return node;
                                            }.apply(this, [])[2]);
                                        }.apply(this, []));
                                    }.apply(this, []);
                                }.apply(this, []) + '") + " " + unescape("';
                            }.apply(this, []) + function() {
                                console.log("arg0 " + unescape("deparse%28rhs%29"));
                                console.log("call " + unescape("escape"));
                                return function() {
                                    console.log("load " + unescape("escape") + " <" + escape + ">");
                                    return escape;
                                }.apply(this, [])(function() {
                                    console.log("arg0 " + unescape("rhs"));
                                    console.log("call " + unescape("deparse"));
                                    return function() {
                                        console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                        return deparse;
                                    }.apply(this, [])(function() {
                                        console.log("load " + unescape("rhs") + " <" + rhs + ">");
                                        return rhs;
                                    }.apply(this, []));
                                }.apply(this, []));
                            }.apply(this, []);
                        }.apply(this, []) + '") + " <" + ';
                    }.apply(this, []) + function() {
                        console.log("arg0 " + unescape("rhs"));
                        console.log("call " + unescape("deparse"));
                        return function() {
                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                            return deparse;
                        }.apply(this, [])(function() {
                            console.log("load " + unescape("rhs") + " <" + rhs + ">");
                            return rhs;
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []) + ' + ">");';
            }.apply(this, []);
        }.apply(this, []);
        rhs = function() {
            console.log("store " + unescape("rhs") + " " + unescape("traverse%28rhs%29.map%28ModifyAndTraverse%29") + " <" + traverse(rhs).map(ModifyAndTraverse) + ">");
            return function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28rhs%29.map"));
                return function() {
                    console.log("arg0 " + unescape("rhs"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("rhs") + " <" + rhs + ">");
                        return rhs;
                    }.apply(this, []));
                }.apply(this, []).map(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            }.apply(this, []);
        }.apply(this, []);
        newcode = function() {
            console.log("store " + unescape("newcode") + " " + unescape("newcode%20+%20%22%20return%20%22%20+%20deparse%28rhs%29%20+%20%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22") + " <" + newcode + " return " + deparse(rhs) + ";}).apply(this, []);" + ">");
            return function() {
                console.log("arg0 " + unescape("newcode%20+%20%22%20return%20%22%20+%20deparse%28rhs%29"));
                console.log("arg1 " + unescape("%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("newcode%20+%20%22%20return%20%22"));
                    console.log("arg1 " + unescape("deparse%28rhs%29"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("newcode"));
                        console.log("arg1 " + unescape("%22%20return%20%22"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("load " + unescape("newcode") + " <" + newcode + ">");
                            return newcode;
                        }.apply(this, []) + " return ";
                    }.apply(this, []) + function() {
                        console.log("arg0 " + unescape("rhs"));
                        console.log("call " + unescape("deparse"));
                        return function() {
                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                            return deparse;
                        }.apply(this, [])(function() {
                            console.log("load " + unescape("rhs") + " <" + rhs + ">");
                            return rhs;
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []) + ";}).apply(this, []);";
            }.apply(this, []);
        }.apply(this, []);
        try {
            var codeToAddTree = function() {
                console.log("store " + unescape("codeToAddTree") + " " + unescape("parser.parse%28newcode%29%5B1%5D%5B0%5D%5B1%5D") + " <" + parser.parse(newcode)[1][0][1] + ">");
                return function() {
                    console.log("arg0 " + unescape("newcode"));
                    console.log("call " + unescape("parser.parse"));
                    return function() {
                        console.log("load " + unescape("parser") + " <" + parser + ">");
                        return parser;
                    }.apply(this, []).parse(function() {
                        console.log("load " + unescape("newcode") + " <" + newcode + ">");
                        return newcode;
                    }.apply(this, []));
                }.apply(this, [])[1][0][1];
            }.apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("%5B%20node%5B0%5D%2C%20node%5B1%5D%2C%20node%5B2%5D%2C%20codeToAddTree%20%5D"));
                console.log("arg1 " + unescape("true"));
                console.log("call " + unescape("this.update"));
                return function() {
                    console.log("load " + unescape("this") + " <" + this + ">");
                    return this;
                }.apply(this, []).update([ function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[0], function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[1], function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[2], function() {
                    console.log("load " + unescape("codeToAddTree") + " <" + codeToAddTree + ">");
                    return codeToAddTree;
                }.apply(this, []) ], function() {
                    console.log("load " + unescape("true") + " <" + true + ">");
                    return true;
                }.apply(this, []));
            })).apply(this, []);
        } catch (e) {
            ((function() {
                console.log("arg0 " + unescape("e.message"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []).message);
            })).apply(this, []);
            throw function() {
                console.log("load " + unescape("e") + " <" + e + ">");
                return e;
            }.apply(this, []);
        }
    } else if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22var%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D"));
            console.log("arg1 " + unescape("%22var%22"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0] === "var";
        }.apply(this, []);
    }.apply(this, [])) {
        var nodes = function() {
            console.log("store " + unescape("nodes") + " " + unescape("%5B%5D") + " <" + [] + ">");
            return [];
        }.apply(this, []);
        for (var compound = function() {
            console.log("store " + unescape("compound") + " " + unescape("null") + " <" + null + ">");
            return null;
        }.apply(this, []) in function() {
            console.log("load " + unescape("node") + " <" + node + ">");
            return node;
        }.apply(this, [])[1]) {
            var rhs = function() {
                console.log("store " + unescape("rhs") + " " + unescape("node%5B1%5D%5Bcompound%5D%5B1%5D") + " <" + node[1][compound][1] + ">");
                return function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[1][function() {
                    console.log("load " + unescape("compound") + " <" + compound + ">");
                    return compound;
                }.apply(this, [])][1];
            }.apply(this, []);
            var newcode = function() {
                console.log("store " + unescape("newcode") + " " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28rhs%29%20+%20%27%20+%20%20%22%3E%22%29%3B%27") + " <" + '(function() { console.log("store " + unescape("' + escape(node[1][compound][0]) + '") + " " + unescape("' + escape(deparse(rhs)) + '") + " <" + ' + deparse(rhs) + ' +  ">");' + ">");
                return function() {
                    console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28rhs%29"));
                    console.log("arg1 " + unescape("%27%20+%20%20%22%3E%22%29%3B%27"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                        console.log("arg1 " + unescape("deparse%28rhs%29"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28rhs%29%29"));
                            console.log("arg1 " + unescape("%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29%20+%20%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27"));
                                console.log("arg1 " + unescape("escape%28deparse%28rhs%29%29"));
                                console.log("call " + unescape("+"));
                                return function() {
                                    console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27%20+%20escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29"));
                                    console.log("arg1 " + unescape("%27%22%29%20+%20%22%20%22%20+%20unescape%28%22%27"));
                                    console.log("call " + unescape("+"));
                                    return function() {
                                        console.log("arg0 " + unescape("%27%28function%28%29%20%7B%20console.log%28%22store%20%22%20+%20unescape%28%22%27"));
                                        console.log("arg1 " + unescape("escape%28node%5B1%5D%5Bcompound%5D%5B0%5D%29"));
                                        console.log("call " + unescape("+"));
                                        return '(function() { console.log("store " + unescape("' + function() {
                                            console.log("arg0 " + unescape("node%5B1%5D%5Bcompound%5D%5B0%5D"));
                                            console.log("call " + unescape("escape"));
                                            return function() {
                                                console.log("load " + unescape("escape") + " <" + escape + ">");
                                                return escape;
                                            }.apply(this, [])(function() {
                                                console.log("load " + unescape("node") + " <" + node + ">");
                                                return node;
                                            }.apply(this, [])[1][function() {
                                                console.log("load " + unescape("compound") + " <" + compound + ">");
                                                return compound;
                                            }.apply(this, [])][0]);
                                        }.apply(this, []);
                                    }.apply(this, []) + '") + " " + unescape("';
                                }.apply(this, []) + function() {
                                    console.log("arg0 " + unescape("deparse%28rhs%29"));
                                    console.log("call " + unescape("escape"));
                                    return function() {
                                        console.log("load " + unescape("escape") + " <" + escape + ">");
                                        return escape;
                                    }.apply(this, [])(function() {
                                        console.log("arg0 " + unescape("rhs"));
                                        console.log("call " + unescape("deparse"));
                                        return function() {
                                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                            return deparse;
                                        }.apply(this, [])(function() {
                                            console.log("load " + unescape("rhs") + " <" + rhs + ">");
                                            return rhs;
                                        }.apply(this, []));
                                    }.apply(this, []));
                                }.apply(this, []);
                            }.apply(this, []) + '") + " <" + ';
                        }.apply(this, []) + function() {
                            console.log("arg0 " + unescape("rhs"));
                            console.log("call " + unescape("deparse"));
                            return function() {
                                console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                return deparse;
                            }.apply(this, [])(function() {
                                console.log("load " + unescape("rhs") + " <" + rhs + ">");
                                return rhs;
                            }.apply(this, []));
                        }.apply(this, []);
                    }.apply(this, []) + ' +  ">");';
                }.apply(this, []);
            }.apply(this, []);
            rhs = function() {
                console.log("store " + unescape("rhs") + " " + unescape("traverse%28rhs%29.map%28ModifyAndTraverse%29") + " <" + traverse(rhs).map(ModifyAndTraverse) + ">");
                return function() {
                    console.log("arg0 " + unescape("ModifyAndTraverse"));
                    console.log("call " + unescape("traverse%28rhs%29.map"));
                    return function() {
                        console.log("arg0 " + unescape("rhs"));
                        console.log("call " + unescape("traverse"));
                        return function() {
                            console.log("load " + unescape("traverse") + " <" + traverse + ">");
                            return traverse;
                        }.apply(this, [])(function() {
                            console.log("load " + unescape("rhs") + " <" + rhs + ">");
                            return rhs;
                        }.apply(this, []));
                    }.apply(this, []).map(function() {
                        console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                        return ModifyAndTraverse;
                    }.apply(this, []));
                }.apply(this, []);
            }.apply(this, []);
            newcode = function() {
                console.log("store " + unescape("newcode") + " " + unescape("newcode%20+%20%22%20return%20%22%20+%20deparse%28rhs%29%20+%20%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22") + " <" + newcode + " return " + deparse(rhs) + ";}).apply(this, []);" + ">");
                return function() {
                    console.log("arg0 " + unescape("newcode%20+%20%22%20return%20%22%20+%20deparse%28rhs%29"));
                    console.log("arg1 " + unescape("%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("newcode%20+%20%22%20return%20%22"));
                        console.log("arg1 " + unescape("deparse%28rhs%29"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("newcode"));
                            console.log("arg1 " + unescape("%22%20return%20%22"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("load " + unescape("newcode") + " <" + newcode + ">");
                                return newcode;
                            }.apply(this, []) + " return ";
                        }.apply(this, []) + function() {
                            console.log("arg0 " + unescape("rhs"));
                            console.log("call " + unescape("deparse"));
                            return function() {
                                console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                return deparse;
                            }.apply(this, [])(function() {
                                console.log("load " + unescape("rhs") + " <" + rhs + ">");
                                return rhs;
                            }.apply(this, []));
                        }.apply(this, []);
                    }.apply(this, []) + ";}).apply(this, []);";
                }.apply(this, []);
            }.apply(this, []);
            try {
                var codeToAddTree = function() {
                    console.log("store " + unescape("codeToAddTree") + " " + unescape("parser.parse%28newcode%29%5B1%5D%5B0%5D%5B1%5D") + " <" + parser.parse(newcode)[1][0][1] + ">");
                    return function() {
                        console.log("arg0 " + unescape("newcode"));
                        console.log("call " + unescape("parser.parse"));
                        return function() {
                            console.log("load " + unescape("parser") + " <" + parser + ">");
                            return parser;
                        }.apply(this, []).parse(function() {
                            console.log("load " + unescape("newcode") + " <" + newcode + ">");
                            return newcode;
                        }.apply(this, []));
                    }.apply(this, [])[1][0][1];
                }.apply(this, []);
                ((function() {
                    console.log("arg0 " + unescape("%5B%20node%5B1%5D%5Bcompound%5D%5B0%5D%2C%20codeToAddTree%20%5D"));
                    console.log("call " + unescape("nodes.push"));
                    return function() {
                        console.log("load " + unescape("nodes") + " <" + nodes + ">");
                        return nodes;
                    }.apply(this, []).push([ function() {
                        console.log("load " + unescape("node") + " <" + node + ">");
                        return node;
                    }.apply(this, [])[1][function() {
                        console.log("load " + unescape("compound") + " <" + compound + ">");
                        return compound;
                    }.apply(this, [])][0], function() {
                        console.log("load " + unescape("codeToAddTree") + " <" + codeToAddTree + ">");
                        return codeToAddTree;
                    }.apply(this, []) ]);
                })).apply(this, []);
            } catch (e) {
                ((function() {
                    console.log("arg0 " + unescape("e.message"));
                    console.log("call " + unescape("console.log"));
                    return function() {
                        console.log("load " + unescape("console") + " <" + console + ">");
                        return console;
                    }.apply(this, []).log(function() {
                        console.log("load " + unescape("e") + " <" + e + ">");
                        return e;
                    }.apply(this, []).message);
                })).apply(this, []);
                throw function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []);
            }
        }
        ((function() {
            console.log("arg0 " + unescape("%5B%20node%5B0%5D%2C%20nodes%20%5D"));
            console.log("arg1 " + unescape("true"));
            console.log("call " + unescape("this.update"));
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).update([ function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0], function() {
                console.log("load " + unescape("nodes") + " <" + nodes + ">");
                return nodes;
            }.apply(this, []) ], function() {
                console.log("load " + unescape("true") + " <" + true + ">");
                return true;
            }.apply(this, []));
        })).apply(this, []);
    } else if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22name%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D"));
            console.log("arg1 " + unescape("%22name%22"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0] === "name";
        }.apply(this, []);
    }.apply(this, [])) {
        var newcode = function() {
            console.log("store " + unescape("newcode") + " " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28node%29%20+%20%27%20+%20%22%3E%22%29%3B%20return%20%27%20+%20deparse%28node%29%20+%20%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22") + " <" + '(function() {console.log("load " + unescape("' + escape(deparse(node, true)) + '") + " <" + ' + deparse(node) + ' + ">"); return ' + deparse(node) + ";}).apply(this, []);" + ">");
            return function() {
                console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28node%29%20+%20%27%20+%20%22%3E%22%29%3B%20return%20%27%20+%20deparse%28node%29"));
                console.log("arg1 " + unescape("%22%3B%7D%29.apply%28this%2C%20%5B%5D%29%3B%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28node%29%20+%20%27%20+%20%22%3E%22%29%3B%20return%20%27"));
                    console.log("arg1 " + unescape("deparse%28node%29"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27%20+%20deparse%28node%29"));
                        console.log("arg1 " + unescape("%27%20+%20%22%3E%22%29%3B%20return%20%27"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29%20+%20%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                            console.log("arg1 " + unescape("deparse%28node%29"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28node%2C%20true%29%29"));
                                console.log("arg1 " + unescape("%27%22%29%20+%20%22%20%3C%22%20+%20%27"));
                                console.log("call " + unescape("+"));
                                return function() {
                                    console.log("arg0 " + unescape("%27%28function%28%29%20%7Bconsole.log%28%22load%20%22%20+%20unescape%28%22%27"));
                                    console.log("arg1 " + unescape("escape%28deparse%28node%2C%20true%29%29"));
                                    console.log("call " + unescape("+"));
                                    return '(function() {console.log("load " + unescape("' + function() {
                                        console.log("arg0 " + unescape("deparse%28node%2C%20true%29"));
                                        console.log("call " + unescape("escape"));
                                        return function() {
                                            console.log("load " + unescape("escape") + " <" + escape + ">");
                                            return escape;
                                        }.apply(this, [])(function() {
                                            console.log("arg0 " + unescape("node"));
                                            console.log("arg1 " + unescape("true"));
                                            console.log("call " + unescape("deparse"));
                                            return function() {
                                                console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                                return deparse;
                                            }.apply(this, [])(function() {
                                                console.log("load " + unescape("node") + " <" + node + ">");
                                                return node;
                                            }.apply(this, []), function() {
                                                console.log("load " + unescape("true") + " <" + true + ">");
                                                return true;
                                            }.apply(this, []));
                                        }.apply(this, []));
                                    }.apply(this, []);
                                }.apply(this, []) + '") + " <" + ';
                            }.apply(this, []) + function() {
                                console.log("arg0 " + unescape("node"));
                                console.log("call " + unescape("deparse"));
                                return function() {
                                    console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                    return deparse;
                                }.apply(this, [])(function() {
                                    console.log("load " + unescape("node") + " <" + node + ">");
                                    return node;
                                }.apply(this, []));
                            }.apply(this, []);
                        }.apply(this, []) + ' + ">"); return ';
                    }.apply(this, []) + function() {
                        console.log("arg0 " + unescape("node"));
                        console.log("call " + unescape("deparse"));
                        return function() {
                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                            return deparse;
                        }.apply(this, [])(function() {
                            console.log("load " + unescape("node") + " <" + node + ">");
                            return node;
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []) + ";}).apply(this, []);";
            }.apply(this, []);
        }.apply(this, []);
        try {
            node = function() {
                console.log("store " + unescape("node") + " " + unescape("parser.parse%28newcode%29%5B1%5D%5B0%5D%5B1%5D") + " <" + parser.parse(newcode)[1][0][1] + ">");
                return function() {
                    console.log("arg0 " + unescape("newcode"));
                    console.log("call " + unescape("parser.parse"));
                    return function() {
                        console.log("load " + unescape("parser") + " <" + parser + ">");
                        return parser;
                    }.apply(this, []).parse(function() {
                        console.log("load " + unescape("newcode") + " <" + newcode + ">");
                        return newcode;
                    }.apply(this, []));
                }.apply(this, [])[1][0][1];
            }.apply(this, []);
        } catch (e) {
            ((function() {
                console.log("arg0 " + unescape("e.message"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []).message);
            })).apply(this, []);
            throw function() {
                console.log("load " + unescape("e") + " <" + e + ">");
                return e;
            }.apply(this, []);
        }
        ((function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("true"));
            console.log("call " + unescape("this.update"));
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).update(function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []), function() {
                console.log("load " + unescape("true") + " <" + true + ">");
                return true;
            }.apply(this, []));
        })).apply(this, []);
    } else if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22binary%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D"));
            console.log("arg1 " + unescape("%22binary%22"));
            console.log("call " + unescape("%3D%3D%3D"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0] === "binary";
        }.apply(this, []);
    }.apply(this, [])) {
        var add = function() {
            console.log("store " + unescape("add") + " " + unescape("%5B%5D") + " <" + [] + ">");
            return [];
        }.apply(this, []);
        var args = function() {
            console.log("store " + unescape("args") + " " + unescape("%5B%20this.node%5B2%5D%2C%20this.node%5B3%5D%20%5D") + " <" + [ this.node[2], this.node[3] ] + ">");
            return [ function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).node[2], function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).node[3] ];
        }.apply(this, []);
        for (var arg = function() {
            console.log("store " + unescape("arg") + " " + unescape("null") + " <" + null + ">");
            return null;
        }.apply(this, []) in function() {
            console.log("load " + unescape("args") + " <" + args + ">");
            return args;
        }.apply(this, [])) {
            ((function() {
                console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28args%5Barg%5D%29%29%20+%20%27%22%29%29%27"));
                console.log("call " + unescape("add.push"));
                return function() {
                    console.log("load " + unescape("add") + " <" + add + ">");
                    return add;
                }.apply(this, []).push(function() {
                    console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27%20+%20escape%28deparse%28args%5Barg%5D%29%29"));
                    console.log("arg1 " + unescape("%27%22%29%29%27"));
                    console.log("call " + unescape("+"));
                    return function() {
                        console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg%20+%20%27%20%22%20+%20unescape%28%22%27"));
                        console.log("arg1 " + unescape("escape%28deparse%28args%5Barg%5D%29%29"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27console.log%28%22arg%27%20+%20arg"));
                            console.log("arg1 " + unescape("%27%20%22%20+%20unescape%28%22%27"));
                            console.log("call " + unescape("+"));
                            return function() {
                                console.log("arg0 " + unescape("%27console.log%28%22arg%27"));
                                console.log("arg1 " + unescape("arg"));
                                console.log("call " + unescape("+"));
                                return 'console.log("arg' + function() {
                                    console.log("load " + unescape("arg") + " <" + arg + ">");
                                    return arg;
                                }.apply(this, []);
                            }.apply(this, []) + ' " + unescape("';
                        }.apply(this, []) + function() {
                            console.log("arg0 " + unescape("deparse%28args%5Barg%5D%29"));
                            console.log("call " + unescape("escape"));
                            return function() {
                                console.log("load " + unescape("escape") + " <" + escape + ">");
                                return escape;
                            }.apply(this, [])(function() {
                                console.log("arg0 " + unescape("args%5Barg%5D"));
                                console.log("call " + unescape("deparse"));
                                return function() {
                                    console.log("load " + unescape("deparse") + " <" + deparse + ">");
                                    return deparse;
                                }.apply(this, [])(function() {
                                    console.log("load " + unescape("args") + " <" + args + ">");
                                    return args;
                                }.apply(this, [])[function() {
                                    console.log("load " + unescape("arg") + " <" + arg + ">");
                                    return arg;
                                }.apply(this, [])]);
                            }.apply(this, []));
                        }.apply(this, []);
                    }.apply(this, []) + '"))';
                }.apply(this, []));
            })).apply(this, []);
        }
        var func = function() {
            console.log("store " + unescape("func") + " " + unescape("this.node%5B1%5D") + " <" + this.node[1] + ">");
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).node[1];
        }.apply(this, []);
        ((function() {
            console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27%20+%20escape%28func%29%20+%20%27%22%29%29%27"));
            console.log("call " + unescape("add.push"));
            return function() {
                console.log("load " + unescape("add") + " <" + add + ">");
                return add;
            }.apply(this, []).push(function() {
                console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27%20+%20escape%28func%29"));
                console.log("arg1 " + unescape("%27%22%29%29%27"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%27console.log%28%22call%20%22%20+%20unescape%28%22%27"));
                    console.log("arg1 " + unescape("escape%28func%29"));
                    console.log("call " + unescape("+"));
                    return 'console.log("call " + unescape("' + function() {
                        console.log("arg0 " + unescape("func"));
                        console.log("call " + unescape("escape"));
                        return function() {
                            console.log("load " + unescape("escape") + " <" + escape + ">");
                            return escape;
                        }.apply(this, [])(function() {
                            console.log("load " + unescape("func") + " <" + func + ">");
                            return func;
                        }.apply(this, []));
                    }.apply(this, []);
                }.apply(this, []) + '"))';
            }.apply(this, []));
        })).apply(this, []);
        args = function() {
            console.log("store " + unescape("args") + " " + unescape("traverse%28args%29.map%28ModifyAndTraverse%29") + " <" + traverse(args).map(ModifyAndTraverse) + ">");
            return function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28args%29.map"));
                return function() {
                    console.log("arg0 " + unescape("args"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("args") + " <" + args + ">");
                        return args;
                    }.apply(this, []));
                }.apply(this, []).map(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            }.apply(this, []);
        }.apply(this, []);
        ((function() {
            console.log("arg0 " + unescape("%22return%20%22%20+%20deparse%28%5B%20this.node%5B0%5D%2C%20this.node%5B1%5D%2C%20args%5B0%5D%2C%20args%5B1%5D%20%5D%29%20+%20%22%3B%22"));
            console.log("call " + unescape("add.push"));
            return function() {
                console.log("load " + unescape("add") + " <" + add + ">");
                return add;
            }.apply(this, []).push(function() {
                console.log("arg0 " + unescape("%22return%20%22%20+%20deparse%28%5B%20this.node%5B0%5D%2C%20this.node%5B1%5D%2C%20args%5B0%5D%2C%20args%5B1%5D%20%5D%29"));
                console.log("arg1 " + unescape("%22%3B%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%22return%20%22"));
                    console.log("arg1 " + unescape("deparse%28%5B%20this.node%5B0%5D%2C%20this.node%5B1%5D%2C%20args%5B0%5D%2C%20args%5B1%5D%20%5D%29"));
                    console.log("call " + unescape("+"));
                    return "return " + function() {
                        console.log("arg0 " + unescape("%5B%20this.node%5B0%5D%2C%20this.node%5B1%5D%2C%20args%5B0%5D%2C%20args%5B1%5D%20%5D"));
                        console.log("call " + unescape("deparse"));
                        return function() {
                            console.log("load " + unescape("deparse") + " <" + deparse + ">");
                            return deparse;
                        }.apply(this, [])([ function() {
                            console.log("load " + unescape("this") + " <" + this + ">");
                            return this;
                        }.apply(this, []).node[0], function() {
                            console.log("load " + unescape("this") + " <" + this + ">");
                            return this;
                        }.apply(this, []).node[1], function() {
                            console.log("load " + unescape("args") + " <" + args + ">");
                            return args;
                        }.apply(this, [])[0], function() {
                            console.log("load " + unescape("args") + " <" + args + ">");
                            return args;
                        }.apply(this, [])[1] ]);
                    }.apply(this, []);
                }.apply(this, []) + ";";
            }.apply(this, []));
        })).apply(this, []);
        var codeToAdd = function() {
            console.log("store " + unescape("codeToAdd") + " " + unescape("%22%28function%28%29%20%7B%22%20+%20add.join%28%22%3B%22%29%20+%20%22%7D%29.apply%28this%2C%20%5B%5D%29%22") + " <" + "(function() {" + add.join(";") + "}).apply(this, [])" + ">");
            return function() {
                console.log("arg0 " + unescape("%22%28function%28%29%20%7B%22%20+%20add.join%28%22%3B%22%29"));
                console.log("arg1 " + unescape("%22%7D%29.apply%28this%2C%20%5B%5D%29%22"));
                console.log("call " + unescape("+"));
                return function() {
                    console.log("arg0 " + unescape("%22%28function%28%29%20%7B%22"));
                    console.log("arg1 " + unescape("add.join%28%22%3B%22%29"));
                    console.log("call " + unescape("+"));
                    return "(function() {" + function() {
                        console.log("arg0 " + unescape("%22%3B%22"));
                        console.log("call " + unescape("add.join"));
                        return function() {
                            console.log("load " + unescape("add") + " <" + add + ">");
                            return add;
                        }.apply(this, []).join(";");
                    }.apply(this, []);
                }.apply(this, []) + "}).apply(this, [])";
            }.apply(this, []);
        }.apply(this, []);
        try {
            var codeToAddTree = function() {
                console.log("store " + unescape("codeToAddTree") + " " + unescape("parser.parse%28codeToAdd%29%5B1%5D%5B0%5D%5B1%5D") + " <" + parser.parse(codeToAdd)[1][0][1] + ">");
                return function() {
                    console.log("arg0 " + unescape("codeToAdd"));
                    console.log("call " + unescape("parser.parse"));
                    return function() {
                        console.log("load " + unescape("parser") + " <" + parser + ">");
                        return parser;
                    }.apply(this, []).parse(function() {
                        console.log("load " + unescape("codeToAdd") + " <" + codeToAdd + ">");
                        return codeToAdd;
                    }.apply(this, []));
                }.apply(this, [])[1][0][1];
            }.apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("codeToAddTree"));
                console.log("arg1 " + unescape("true"));
                console.log("call " + unescape("this.update"));
                return function() {
                    console.log("load " + unescape("this") + " <" + this + ">");
                    return this;
                }.apply(this, []).update(function() {
                    console.log("load " + unescape("codeToAddTree") + " <" + codeToAddTree + ">");
                    return codeToAddTree;
                }.apply(this, []), function() {
                    console.log("load " + unescape("true") + " <" + true + ">");
                    return true;
                }.apply(this, []));
            })).apply(this, []);
        } catch (e) {
            ((function() {
                console.log("arg0 " + unescape("e.message"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []).message);
            })).apply(this, []);
            throw function() {
                console.log("load " + unescape("e") + " <" + e + ">");
                return e;
            }.apply(this, []);
        }
    } else if (function() {
        console.log("arg0 " + unescape("node%20instanceof%20Array"));
        console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22defun%22%20%7C%7C%20node%5B0%5D%20%3D%3D%3D%20%22function%22"));
        console.log("call " + unescape("%26%26"));
        return function() {
            console.log("arg0 " + unescape("node"));
            console.log("arg1 " + unescape("Array"));
            console.log("call " + unescape("instanceof"));
            return function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, []) instanceof function() {
                console.log("load " + unescape("Array") + " <" + Array + ">");
                return Array;
            }.apply(this, []);
        }.apply(this, []) && function() {
            console.log("arg0 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22defun%22"));
            console.log("arg1 " + unescape("node%5B0%5D%20%3D%3D%3D%20%22function%22"));
            console.log("call " + unescape("%7C%7C"));
            return function() {
                console.log("arg0 " + unescape("node%5B0%5D"));
                console.log("arg1 " + unescape("%22defun%22"));
                console.log("call " + unescape("%3D%3D%3D"));
                return function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[0] === "defun";
            }.apply(this, []) || function() {
                console.log("arg0 " + unescape("node%5B0%5D"));
                console.log("arg1 " + unescape("%22function%22"));
                console.log("call " + unescape("%3D%3D%3D"));
                return function() {
                    console.log("load " + unescape("node") + " <" + node + ">");
                    return node;
                }.apply(this, [])[0] === "function";
            }.apply(this, []);
        }.apply(this, []);
    }.apply(this, [])) {
        var modifiedBody = function() {
            console.log("store " + unescape("modifiedBody") + " " + unescape("traverse%28node%5B3%5D%29.map%28ModifyAndTraverse%29") + " <" + traverse(node[3]).map(ModifyAndTraverse) + ">");
            return function() {
                console.log("arg0 " + unescape("ModifyAndTraverse"));
                console.log("call " + unescape("traverse%28node%5B3%5D%29.map"));
                return function() {
                    console.log("arg0 " + unescape("node%5B3%5D"));
                    console.log("call " + unescape("traverse"));
                    return function() {
                        console.log("load " + unescape("traverse") + " <" + traverse + ">");
                        return traverse;
                    }.apply(this, [])(function() {
                        console.log("load " + unescape("node") + " <" + node + ">");
                        return node;
                    }.apply(this, [])[3]);
                }.apply(this, []).map(function() {
                    console.log("load " + unescape("ModifyAndTraverse") + " <" + ModifyAndTraverse + ">");
                    return ModifyAndTraverse;
                }.apply(this, []));
            }.apply(this, []);
        }.apply(this, []);
        try {
            var codeToAddTree = function() {
                console.log("store " + unescape("codeToAddTree") + " " + unescape("parser.parse%28%27console.log%28%22enter%20function%20%27%20+%20node%5B1%5D%20+%20%27%22%29%3B%27%29%5B1%5D%5B0%5D") + " <" + parser.parse('console.log("enter function ' + node[1] + '");')[1][0] + ">");
                return function() {
                    console.log("arg0 " + unescape("%27console.log%28%22enter%20function%20%27%20+%20node%5B1%5D%20+%20%27%22%29%3B%27"));
                    console.log("call " + unescape("parser.parse"));
                    return function() {
                        console.log("load " + unescape("parser") + " <" + parser + ">");
                        return parser;
                    }.apply(this, []).parse(function() {
                        console.log("arg0 " + unescape("%27console.log%28%22enter%20function%20%27%20+%20node%5B1%5D"));
                        console.log("arg1 " + unescape("%27%22%29%3B%27"));
                        console.log("call " + unescape("+"));
                        return function() {
                            console.log("arg0 " + unescape("%27console.log%28%22enter%20function%20%27"));
                            console.log("arg1 " + unescape("node%5B1%5D"));
                            console.log("call " + unescape("+"));
                            return 'console.log("enter function ' + function() {
                                console.log("load " + unescape("node") + " <" + node + ">");
                                return node;
                            }.apply(this, [])[1];
                        }.apply(this, []) + '");';
                    }.apply(this, []));
                }.apply(this, [])[1][0];
            }.apply(this, []);
            ((function() {
                console.log("arg0 " + unescape("0"));
                console.log("arg1 " + unescape("0"));
                console.log("arg2 " + unescape("codeToAddTree"));
                console.log("call " + unescape("modifiedBody.splice"));
                return function() {
                    console.log("load " + unescape("modifiedBody") + " <" + modifiedBody + ">");
                    return modifiedBody;
                }.apply(this, []).splice(0, 0, function() {
                    console.log("load " + unescape("codeToAddTree") + " <" + codeToAddTree + ">");
                    return codeToAddTree;
                }.apply(this, []));
            })).apply(this, []);
        } catch (e) {
            ((function() {
                console.log("arg0 " + unescape("e.message"));
                console.log("call " + unescape("console.log"));
                return function() {
                    console.log("load " + unescape("console") + " <" + console + ">");
                    return console;
                }.apply(this, []).log(function() {
                    console.log("load " + unescape("e") + " <" + e + ">");
                    return e;
                }.apply(this, []).message);
            })).apply(this, []);
            throw function() {
                console.log("load " + unescape("e") + " <" + e + ">");
                return e;
            }.apply(this, []);
        }
        ((function() {
            console.log("arg0 " + unescape("%5B%20node%5B0%5D%2C%20node%5B1%5D%2C%20node%5B2%5D%2C%20modifiedBody%20%5D"));
            console.log("arg1 " + unescape("true"));
            console.log("call " + unescape("this.update"));
            return function() {
                console.log("load " + unescape("this") + " <" + this + ">");
                return this;
            }.apply(this, []).update([ function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[0], function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[1], function() {
                console.log("load " + unescape("node") + " <" + node + ">");
                return node;
            }.apply(this, [])[2], function() {
                console.log("load " + unescape("modifiedBody") + " <" + modifiedBody + ">");
                return modifiedBody;
            }.apply(this, []) ], function() {
                console.log("load " + unescape("true") + " <" + true + ">");
                return true;
            }.apply(this, []));
        })).apply(this, []);
    }
}

((function() {
    console.log("arg0 " + unescape("process.argv"));
    console.log("call " + unescape("main"));
    return function() {
        console.log("load " + unescape("main") + " <" + main + ">");
        return main;
    }.apply(this, [])(function() {
        console.log("load " + unescape("process") + " <" + process + ">");
        return process;
    }.apply(this, []).argv);
})).apply(this, []);
