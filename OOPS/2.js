'use strict';
class Base{

    constructor(){
    }
    print1(){
        console.log('tst1');
    }
    // methods definitions go here
}

class Child extends Base{
    // methods definitions go here
    print(){
        console.log('test');
    }
}

var childObj = new Base();
childObj.print();