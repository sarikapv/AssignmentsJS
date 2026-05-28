// Bank Transactions: 
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount: 
// 1 50000
// 2 -2000
// 3 3000
// 4 -15000
// 5 -200
// 6 -300
// 7 4000
// 8 -3000

//1. Store all the transactions in any data structure 
let transactionamount: number[] = [50000, 3000, 4000, -2000, -15000, -200, -300, -3000];
let creditcount: number = 0;
let debitcount: number = 0;
let totalcreditamount: number = 0;
let totaldebitamount: number = 0;
let remainingbalance : number=0;
let suspiciousCount : number=0

// using loops Print total number of credit and debit transactions completed
for (let i = 0; i < transactionamount.length; i++) {
    if (transactionamount[i] > 0) {
        creditcount++;
    } else if (transactionamount[i] < 0) {
        debitcount++;
    }
}
console.log(`Debit transaction count : ${debitcount}`);
console.log(`Credit transaction count : ${creditcount}`);

// 2. Print the total amount credited and debited in account
for (let i = 0; i < transactionamount.length; i++) {
    if (transactionamount[i] > 0) {
        totalcreditamount = totalcreditamount + transactionamount[i];
    } else if (transactionamount[i] < 0) {
        totaldebitamount = totaldebitamount + transactionamount[i];
    }
}
console.log(`Total amount credited : ${totalcreditamount}`);
console.log(`Total amount Debited: ${totaldebitamount}`);

// 3. Print total amount remaining at the end in Bank Account
console.log(`Total amount remaining : ${remainingbalance=totalcreditamount+totaldebitamount}`);

// 4.If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit Transaction with Amount” 
// and also print total number of suspicious transactions
for (let i = 0; i < transactionamount.length; i++) {
if (transactionamount[i]>10000 || transactionamount[i] <-10000 ){

  console.log("Suspicious Transaction with Amount");
  console.log(transactionamount[i]);
  suspiciousCount++;
}

}
console.log(`Count of Suspicious transactio: ${suspiciousCount}`);
