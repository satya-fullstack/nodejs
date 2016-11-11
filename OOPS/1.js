'use strict';
class Animal{

    constructor(name){
        this.name = name ;
    }

    print(){
        console.log('Name is :'+ this.name);
    }
}

var a1 = new Animal('Dog');
console.log(a1.print());
