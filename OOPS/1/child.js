//Similar to class Child extends Parent


module.exports = Child;

function Child(parent) {

    this.parent = parent;
}

Child.prototype = {

    // Prints Parent Variable:
    printParentVariable: function() {
        console.log(this.parent.a);
    },

    // Calls Parent Function:
    callParentFunction: function() {
        this.parent.printText('Child calling parent function.');
    }
};