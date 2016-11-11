var _super = require("./animal.js").prototype,
    method = Mouse.prototype = Object.create( _super );

method.constructor = Mouse;

function Mouse() {
    _super.constructor.apply( this, arguments );
}
//Pointless override to show super calls
//note that for performance (e.g. inlining the below is impossible)
//you should do
//method.$getAge = _super.getAge;
//and then use this.$getAge() instead of super()
method.getAge = function() {
    return _super.getAge.call(this);
};

module.exports = Mouse;