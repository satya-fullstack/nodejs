'use strict';
class Base{

    constructor(){
        var obj = '';
    }
    print1(obj){
        obj.print();
    }

    // methods definitions go here
}

class Child extends Base{
    // methods definitions go here
    print(){
        console.log('test from child class');
    }
}

var t = new Base();
var main = t.print1(new Child());

//t.setChild(new Child());


