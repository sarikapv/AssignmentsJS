//syntax to store data =>  declaration variable =data; 

// Operators are special charters used in day to day program
// "=" is an operator which is nothing but special characters used in js to perform different operations/functions
//5 types of operators in JS.

//1. Arithematic: Used to perfom Mathematical Operations "+,-,*,/,%,++,--"

//+ -> Addition , - -> Substraction,* Multiplication,/ Division, % Modulus (reminder of divsion 9%3=0)
// ++ -> Increment (Increase value by 1) (ex: a=10; a++=> a+1=10+1=11)
// -- -> Decrement (Decrease valye by1) (ex: b=5; b== => b-1=5-1=4)

let a=10;
let b=20;
console.log(a++); 
console.log(b--); 

// placement of ++ and -- defines the output// if ++ written right (a++,b--) considered as post increment or decrement
// Post means in current line increase the value so after increment the value get increased by1 else use old value only
console.log(a);
console.log(b);

let c=10;
let d=20;
// ++c => Pre increment and --d => predecrement which first increase value by1 and execute , first decrease value by1 the execute.
console.log(++c); // pre increment
console.log(--d); // pre decrement
 
//2. Assignment: Special characters used to assign values to variable (+=,-=,*=,/=,%=)
let i=10;
console.log("initial value of i="+i);
i+=10;// i = i+10 =10+10=20;
console.log("after using +=then,value of i="+i);
//-=
i-=10;// i = i-10 =20-10=10;
console.log("decrement value of i = "+i);
i*=10;// i = i*10 =20*10=100;
console.log("multiple value of i = "+i);
i/=10;// i = i/10 =20/10=2;
console.log("divided value of i = "+i);
i%=10;// i = i%10 =20%10=0;
console.log("decrement value of i = "+i);

//3. Comparision: Used to compare two values and return boolean values(True/False)(==,===,>,<,>=,<=,!=)
// ==  loose equality - Compares only data 
// === strict equality - data along with its data type
let x=10;
let y=10;
let z="10"; // anything in "" . ''. treated as text value not numbers
console.log(x==y); // true
console.log(x==z);// true
console.log(x===z);//false

//4. Logical: used to combine more than two conditions (&&,|| (pipe),!)
//&& all conditions must to true
//|| Or any one condition to be true
//! Not returns opposite result
 let p=20;
 let q=30;
 console.log(p>5 && q>10); // true
 console.log(p>20 || q>20); // true
 console.log(!p>20); // true

//5. Ternary: special characters used to write conditions as shorthand form for if/else conditions (?)

// syntax: let result=condition ? value if true : value if false;
let age =18;
let result = (age>18) ? "eligible": "not eligible";
console.log(result);