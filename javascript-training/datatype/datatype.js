
//Data types are of two differnt types 

// 1. primitive data types -> mutable
// 2. non primitive data types -> immutable

//Immutable - original value wont change even after multiple operation unless overriding
let a=10;
a+10; // original value change
console.log(a);

//mutable - Original value change 
let obj={
"name":"john",
"id" : 1234
}
obj.age = 35;
console.log(obj);

/**********PRIMITIVE DATATYPES *************/
// 6types : number, string, boolean,undefined,null,symbol
// 1.number => Datattype that can store numbers with decimals or without decimals but without using quotations
let num1=10; 
let num2=20.5; 
console.log(typeof num1,typeof num2); // what type of data considering typeof is used

//2. string => collection of characters within quotations ("" or '' or ``)
let employeename="jo`h'n"; 
let location='BGL'; 
let company=`abc`; //`` Backticks are used for dynamic string
console.log(typeof employeename,typeof location,typeof company);
console.log(employeename,location,company);
// Generally to store data in variable//employeename&location and use data inside string to update dynamically if no backticks 
// entire string to be sperated and addlike below.
console.log("Employee name is "+employeename+" and employee location is "+location);

// using backticks `` write as below using $ and {} convient way to use dynamic variable)
console.log(`Employee name is ${employeename} and employee location is ${location}`);

//3. boolean => condition for true/false statement
let x=10;
let y=20;
let z=x>y; // Z store as boolean
console.log(typeof z);
console.log(z);

//4. Undefined => represents a variable that is declared but no value assigned.
let age; // here variable is declared but value is not assigned or variable is not defined
console.log(age); 

//null means variable is declared with null/empty value
let salary=100000;
console.log(salary);
salary=null;
console.log(salary);

//5. Symbol


/***********NON - PRIMITIVE DATATYPES************/
//1. Object => datattype represent collection of key value pairs within curlybraces {} to store multiple type of data
let person ={
    "name" : "john",
    "age" : 36,
    "visa" : true,
    "empid" : 1235,
    "address" : {
        "city" : "chennai",
        "state" : "tamilnadu"
    }
}
// access data by using variable and keys(means name,age etc.,.)
console.log(person.name);
console.log(person.address.city);

//using [] another way
console.log(person["name"]);
console.log(person.address["city"]);

//2. Array => list of values - Array is used to store multiple together within [] sperated with ,
let fruits = ["apple","Mango","Orange"];
let price = [50,60,70];
let fruitandprice =["apple",50,"Mango",60,"Orange",70];
// Access data by using index
console.log(fruits[1],price[1]);
console.log(fruitandprice[1]);

//3. Functions => A block of code or collection of statement written together to complete specific task







