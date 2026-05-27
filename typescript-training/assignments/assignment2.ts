// // A bank evaluates loan applicants based on the following criteria:

let customerName : string = "John Doe";
let creditscore : number = 720;
let income : number= 55000;
let isEmployed : boolean= true;
let debtToIncomeRatio: number = 35.0;
// 1. Credit Score: If the credit score is above 750, the loan is automatically approved.
// If the credit score is between 650 and 750, additional checks are performed.
// If the credit score is below 650, the loan is denied.
// 2. Income: For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.
if(creditscore>750){
  console.log("Loan is approved");
} else if (creditscore >=650 && creditscore <=750 ){
  console.log("Additional Check tobe preformed");
  if( income >=55000){
  console.log("loan is considered");
} else {
    console.log("income requirement not met");
} 
}else {
     console.log("Loan is denied");
}

// // 3. Employment Status:
// // If the customer’s income is at least 50,000, the system checks whether the customer is employed.
// // If the customer is unemployed, the loan is denied.

if(income >= 55000){
 if( isEmployed){
console.log("customer is employed");
}else 
    console.log(" Loan Denied");
}

//4. Debt-to-Income Ratio:
// If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// If the DTI ratio is less than 40%, the loan is approved.
// If the DTI ratio is 40% or greater, the loan is denied.

if(isEmployed){
   if(debtToIncomeRatio < 40) {
    console.log("Loan Approved");
} else 
    console.log("Loan Denied");
}

//Create common function and then based on below details, print whether user is eligible to get the loan or not
function checkLoanEligibility(){    
    if(creditscore >= 650 && income >= 50000 && isEmployed && debtToIncomeRatio<40) {
        console.log("Eligible");
    }
}