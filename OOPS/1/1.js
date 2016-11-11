function Parent() {

}

Parent.prototype = {
    // Instantiate child:
    getChild: function() {
        return new Child(this);
    },

    // Some parent function, print some text:
    printText: function(text) {
        console.log(text);
    }
};