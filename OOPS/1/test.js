var parent = require('./parent')('parent text'); //instantiate parent with some text

var child = parent.getChild();       //create instance of a child

//*** Child has full access to its parents variables and methods ***//

console.log(child.parent.a);         //Print the parent text "parent text"
child.printParentVariable();         //Child method which prints the parent variable "parent text", identical to line above.
child.parent.printText('Child calling parent');      //Call parent method, to print provided text
child.callParentFunction();          //Calls parent method, identical to above.