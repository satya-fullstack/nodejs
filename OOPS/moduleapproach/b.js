'use strict';
var Base = require("./a.js");

class Child extends Base{
    // methods definitions go here
    print(){
        console.log('test from child class');
    }
}

var c = new Child();
c.print1();
c.print();