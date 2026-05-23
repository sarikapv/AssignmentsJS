
// Data Types & Syntax to store data Java Script: 

/* VariableDeclaration Variable = Data;

@param => Declaration -> Nature of data (constant value where no change required)
@param => Variable -> (reference Name) of memory location to store data.
@param => "=" -> assignment operator to assign link to data and variable
@param => data -> information required to be store
@param => ";" -> to end the line.
*/

// Declaration :
// How to declare in Js: "3" keywords are used for declaration.

// 1. var(eliminate) -> var is used declare variable in old version of JS,which is to be avoided now
// 2. let - reassigned/modified 
// 3. const - Cannot be reassigned or modified(fixed value)
 
// "Variabledeclaration" differ mainly on 4 parameters(When to use depends on these paramenters)

// 1. Initialization => Adding value at time of declaration
 var a; // Value intialization/data assign is not mandatory at begining - Can be assign data later aswell.
 let b; //Same as var
 const c=10 ;// Value should be assigned at begnining itself.

// 2. Reassignment => Modify original value 
a=20; // var allow reassignment
b=30; //let allow reassignment
// c=40; //constant wont allow reassignment because in above const already has value and that cant be re assigned
//Print values:
console.log(a);
console.log(b);
console.log(c);

// 3. Redeclaration => using same variable to store some other data redelcare

var a= "jim"; // allows redeclaration
// let b="john"; // doesnt allow redeclaration
// const c= "jack";  // doesnt allow redeclaration
// print values:
console.log(a);
console.log(b);
console.log(c);

// var always consider latest value or redeclaration value so is reason var is not used

// 4. scope => accessing the data out of the block or with in the block

{
var x=10;
let y=20;
const z=30;
//print
console.log("inside block)")
console.log(x);
console.log(y);
console.log(z);
}
console.log("outside block)")
console.log(x);
console.log(y);
console.log(z);
//let and const are block code accessable within block they are defined in
//var is not block scoped



