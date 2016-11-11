module.exports = Parent;

function Parent(a) {
    if (!(this instanceof Parent)) {
        return new Parent(a);
    }
    this.a = a; //Some parent variable
}

Parent.prototype = {

    // Instantiate child:
    getChild: function() {
        var Child = require('./child');
        return new Child(this);
    },

    // Some parent function, print some text:
    printText: function(text) {
        console.log(text);
    }
};