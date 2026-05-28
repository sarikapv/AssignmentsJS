// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all students

let studentnames: string[] = ["Suresh","Mahesh","Naresh"];
let score : number[] = [75, 80, 82];
let addedMarks : number[] = [];
let total =0;
// updatedMarks[0] = studentmarks[0] + 10;
// updatedMarks[1] = studentmarks[1] + 10;
// updatedMarks[2] = studentmarks[2] + 10;

for(let i=0 ; i< score.length; i++){
    addedMarks [i] = score [i]+10;
 } 
for (let i=0;i<addedMarks.length;i++){
    total = total + addedMarks [i];
}

//let totalmarks = updatedMarks[0] +updatedMarks[1]+updatedMarks[2];
let average = total / addedMarks.length;

console.log(addedMarks);
console.log(total);
console.log(average);


