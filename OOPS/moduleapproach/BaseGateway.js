'use strict';
var Stripe = require("./Stripe.js");

class BaseGateway
{
    submitTransaction(obj){
        obj.doTransaction();
        //obj.print();
        console.log('BaseGateway class');
    }
};

var b = new BaseGateway();
b.submitTransaction(new Stripe());
