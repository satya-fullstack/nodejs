'use strict';
var BaseGateway = require("./BaseGateway.js");

class NMI extends BaseGateway{
    // methods definitions go here
    doTransaction(){
        console.log('test from child class');
    }
}

var obj = new NMI();
obj.doTransaction();


