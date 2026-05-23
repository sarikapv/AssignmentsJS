
// while executing it execute from 1st line to last line..

console.log("execute line 1");
console.log("execute line 2");
console.log("execute line 3");
sumOfNumbers(10,5);
console.log("execute line 4");
console.log("execute line 5");
console.log("execute line 6");
console.log("execute line 7");


//Debugging means step by step to be controlled by us on which line to start/end(break points)

//1.Add break point by double click on code where its required.
//2.run program in debug mode to launch in debug mode-(debug - ctr+shift+d)
//3.Use debug option to identify and fix the error.(6buttons gets enabled)

//1. continue (f5) => purpose execte until next break point.
//2. restart(ctrl+shift+f5) => restart program from begining.
//3. stop => once error is identified to stop execution/terminate flow.
//4. step Over => execute current line and move next line.
//5. step Into => go inside step and understand background logic.
//6. step Out => once identified comeback and go back to main flow.

// once issue/bug is identified its fixed and continue.


function sumOfNumbers(a,b){
    c = a-b;
    console.log(c);

}