var t = require('../..')
t.type(t.type, Function)
t.type(function () {}, Function)
t.type(new Function(), Function)
t.type(t.type, Object)
t.type(function () {}, Object)
t.type(new Function(), Object)
