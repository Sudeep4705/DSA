// for loop
// for(let i =0;i<500;i++){
//     console.log("hello");

// }

//
// var i =1;
// for(; i<=10;i++){
//     console.log(i);

// }

// console.log(i+"fail");

// sum of n natural number
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n natural number")
// if(pr===null){
//     console.log("cancelled");

// }
// else{
// let n = Number(p);
// if (isNaN(n)) {
//   console.log("invalid input");
// } else {
//   if (n > 0) {
//     let fact = 0;
//     for (let i = 1; i <= n; i++) {
//       fact += i;
//     }
//     console.log(fact);
//   } else {
//     console.log("should br positive and more than zero");
//   }
// }

// }
// factorial
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n natural number")
// if(pr===null){
//     console.log("cancelled");

// }
// else{
// let n = Number(pr);
// if (isNaN(n)) {
//   console.log("invalid input");
// } else {
//   if (n > 0) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//       fact *= i;
//     }
//     console.log(fact);
//   } else {
//     console.log("should br positive and more than zero");
//   }
// }

// }
// how many number can divisible by n
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n natural number:")
// if(pr===null){
//     console.log("cancelled");

// }
// else{
// let n = Number(pr);
// if (isNaN(n)) {
//   console.log("invalid input");
// } else {
//   if (n > 0) {

//     for (let i = 1; i <=Math.floor(n/2); i++) {

//         if(n%i===0){
// console.log(i);

//         }
//       }
// console.log(n);

//   } else {
//     console.log("should br positive and more than zero");
//   }
// }

// }

// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n number:")
// if(pr===null){
//   console.log("canccelled");

// }else{
//   let n = Number(pr);
//   if(isNaN(n)){
// console.log("please enter the number");

//   }else{
//     if(n>0){
//       for(let i=1; i<=Math.floor(n/2); i++){
//         if(n%i===0){
//           console.log(i);

//         }

//       }
//       console.log(n);

//     }else{
//       console.log("should be positive or more than zero");

//     }
//   }
// }

// prime number
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n number:")
// if(pr===null){
//   console.log("canccelled");

// }else{
//   let n = Number(pr);
//   if(isNaN(n)){
// console.log("please enter the number");
//   }else{
//     if(n>0){
//       let isprime = true;
//       for(let i=2; i<=Math.floor(n/2); i++){
//         if(n%i===0){
//      isprime=false
//      break;

//         }

//       }
//       console.log(isprime);

//     }else{
//       console.log("should be positive or more than zero");

//     }
//   }
// }

// prime number
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the n number:"));
// function isprime(n){
//   if(n<=1) return false;
//   if(n==2) return true;
//   if(n%2==0) return false;
//   for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//     if(n%i==0) return false
//   }
//   return true;
// }
// console.log(isprime(n));

// break and continue
// for(let i=1;i<23;i++){
//   if(i===11){
//     break;
//     // continue;
//   }
//   else{
//     console.log(i);

//   }
// }

// while loop
// start;
// while(conditon){
//   // code
//   change;
// }

// sum of digit
//  const prompt = require("prompt-sync")();
// let ans = prompt("enter the exit to stop:")

// while(ans!="exit"){
//    ans = prompt("enter the exit to stop:")
// }

// sum of digit using while
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n number:")
// if(pr===null){
//   console.log("canccelled");

// }else{
//   let n = Number(pr);
//   if(isNaN(n)){
// console.log("please enter the number");

//   }else{
//     if(n>0){
//        let sum = 0;
//      while(n>0){

//         let rem = n%10;
//         sum = sum + rem;
//         n = Math.floor(n/10);

//      }
//      console.log(sum);

//     }else{
//       console.log("should be positive or more than zero");

//     }
//   }
// }

// reverse a number
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n number:");
// if(pr === null) {
//   console.log("canccelled");
// } else {
//   let n = Number(pr);
//   if(isNaN(n)){
//     console.log("please enter the number");
//   }else {
//     if(n > 0){
//         let rev = 0
//         while (n > 0) {
//         let rem = n % 10;
//         rev = rev * 10 + rem;
//         n = Math.floor(n / 10);
//       } 
//       console.log(rev);
//     }else {
//       console.log("should be positive or more than zero");
//     }
//   }
// }

// strong number
// const prompt = require("prompt-sync")();
// let pr = prompt("enter the n number:");
// if(pr === null) {
//   console.log("canccelled");
// } else {
//   let n = Number(pr);
//   if(isNaN(n)){
//     console.log("please enter the number");
//   }else {
//     if(n > 0){
//       let sum = 0;
//       let copy = n;
//     while(n>0){

//       let rem = n%10;
//       let fact  = 1;
//       for(let i=1;i<=rem;i++){
//         fact = fact*i;
//       }
//       sum = sum + fact;
//       n = Math.floor(n/10);
//     }
//       if(copy===sum){
//         console.log("strong number");
        
//       }
//       else{
//         console.log("not a strong number");
        
//       }
//     }else {
//       console.log("should be positive or more than zero");
//     }
//   }
// }

// do while
// let i = 1;

// do {
//   console.log("hey");
//   i++;
  
// }
// while(i<=10);
// const prompt = require("prompt-sync")();



// let pr; 

// do {
//   pr = Number(prompt("Enter a number (0 to exit): ")); 
//   if (pr !== 0) {
//     console.log("hello");
//   }
// } while (pr !== 0);

// console.log("Exit");


// guess the number
// const prompt = require("prompt-sync")();

// let random  = Math.floor(Math.random()*100+1)

// let guess;
// while(guess!=random){
// guess = Number(prompt("guess the number:"));
// if(isNaN(guess)||guess<1 || guess>100){
// console.log("try again b/w 1 to 100");
// continue
// }
// if(guess>random){
//   console.log("to high try again");
  
// }else if(guess<random){
//   console.log(("to low try again"));
  
// }
// else{
//   console.log("Congrats and number was",guess);
  
// }
// }

// sastha calculator

// const prompt = require("prompt-sync")();

// let choice;

// do {
//   choice = Number(prompt("Enter choice (1=Add, 2=Subtract, 3=Multiply, 0=Exit): "));

//   if (choice === 1) {
//     let num1 = Number(prompt("Enter the first number: "));
//     let num2 = Number(prompt("Enter the second number: "));
//     let add = num1 + num2;
//     console.log("Addition:", add);

//   } else if (choice === 2) {
//     let num1 = Number(prompt("Enter the first number: "));
//     let num2 = Number(prompt("Enter the second number: "));
//     let sub = num1 - num2;
//     console.log("Subtraction:", sub);

//   } else if (choice === 3) {
//     let num1 = Number(prompt("Enter the first number: "));
//     let num2 = Number(prompt("Enter the second number: "));
//     let mul = num1 * num2;
//     console.log("Multiplication:", mul);

//   } else if (choice !== 0) {
//     console.log("Please enter a valid choice between 1 and 3.");
//   }

// } while (choice !== 0);

// console.log("Program exited.");

// string revesre
// function reverse(str){
//     return str.split(" ").map(word=>word.split("").reverse().join("")).join(" ")
// }

// console.log(reverse("sudeep goat"));


// count vowels

// function Countvowels(str){
//     let count = 0
//     let owels="aeiouAEIOU"

//     for(let ch of str){
//         if(owels.includes(ch)){
//             count++    
            
//         }
//     }
//     return count
// }

// console.log(Countvowels("sudeepeeefaef"));

// finding the missing number

// function missingNumber(arr){
//     for(let i =1;i<arr.length+1;i++){
//         if(!arr.includes(i)){
//             return i
//         }
//     }
// }
// console.log(missingNumber([1,2,4,5,6]));

// remove duplicates from array
// function duplicates(arr){
//     return [...new Set(arr)]
// }

// console.log(duplicates([1,1,2,3,4,4,5]));


