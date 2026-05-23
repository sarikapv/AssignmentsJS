
//syntax to store data =>  declaration variable =data; 

// variable is about name of location to store data

// Rules declaring variable for storing data

//string data in js:
let empname = "john";

// 1. variable name must not be a reserved keyword. (words already used in JS(available in libraries))
// let const =  "john"; //const is already used in js as constant value so we cannt use the same

// 2. variable cant be literals (result of some condition, true,false,undefined,null)
// let true ="john";

// 3. variable name cannt start with numbers.
// let 1empnum="john";

// 4. variable shouldnot contain special characters except $ and _
// let emp@name="jon";

// 5. variable shouldnot contain spaces or hypen
// let emp name="john";

// 6. variable should be unique
// let empname = "jim";

// Standards to be followed while declaring a variable
// 1. variable name should be meaningful and self explanatory
let c = 1234; // not good as variable name
let carnumber = 1234;

// 2.variable name should follow naming convention: camelCase;kebabcase,pascalCase,underscore_case
//regular variables,methods,functions are declared using cameCase(languageBasicsOfJavaScript)
//Constant valued should be declared with underscore_case with complete uppercase characters (PI_VALUE,COMPANY_Name)
//Class Name should follow pascalCase. (LanguageBasicsOfJavaScript)