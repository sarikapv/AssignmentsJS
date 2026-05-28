// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all students

let studentnames: string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks = [75, 80, 82]
let updatedMarks : number[] = [];
updatedMarks[0] = studentMarks[0] + 10;
updatedMarks[1] = studentMarks[1] + 10;
updatedMarks[2] = studentMarks[2] + 10;

let totalmarks = updatedMarks[0] +updatedMarks[1]+updatedMarks[2];
let average = totalmarks/3;

console.log(updatedMarks);
console.log(totalmarks);
console.log(average);


