// pattern programming
// console.log("hello");
// console.log("world");


// process.stdout.write("helloo ")
// process.stdout.write("world")


const prompt = require("prompt-sync")();

// let a = prompt("enter the number:")

// process.stdout.write(a)

// star ex
//  process.stdout.write("*")
//  process.stdout.write("*")
//  process.stdout.write("*")
//  process.stdout.write("*")
//  process.stdout.write("*")


// let n = Number(prompt("enter the number:"));

// for(let i=1;i<=n;i++){
//    process.stdout.write("*")
    
// } 
// console.log();

// for(let i=1;i<=n;i++){
//    process.stdout.write("*")
    
// } 
// console.log();

// for(let i=1;i<=n;i++){
//    process.stdout.write("*")
    
// } 
// console.log();

// for(let i=1;i<=n;i++){
//    process.stdout.write("*")
    
// } 
// console.log();

// for(let i=1;i<=n;i++){
//    process.stdout.write("*")
    
// } 
// console.log();


// base pattern
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));

// for(let i=1;i<=n;i++){
   
   
   
//    for(let j=1;j<=n;j++){
//     process.stdout.write("*")
//    }
//    console.log();
   
   
// } 

// right angle triangle
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));
// for(let i=1;i<=n;i++){
//      for(let j=1;j<=i;j++){
//     process.stdout.write("*")
//    }
//    console.log();
// } 

// q2
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));
// for(let i=1;i<=n;i++){
//      for(let j=1;j<=i;j++){
//     process.stdout.write(j+"")
//    }
//    console.log();
// } 


// q3
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));
// for(let i=1;i<=n;i++){  
//     let ascii = 65  
//      for(let j=1;j<=i;j++){
//     process.stdout.write(String.fromCharCode(ascii))
//     ascii++
//    }
//    console.log();
// } 


// inverted right angle triangle
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));
// for(let i=1;i<=n;i++){
//      for(let j=n;j>=i;j--){
//     process.stdout.write("*")
//    }
//    console.log();
// } 

//2nd option 
// const prompt = require("prompt-sync")();
// let n = Number(prompt("enter the number:"));
// for(let i=1;i<=n;i++){
//      for(let j=1;j<=n-i+1;j++){
//     process.stdout.write("*")
//    }
//    console.log();
// }  




// mirror right angle triangle
// const prompt = require("prompt-sync")();
// let num = Number(prompt("enter the num: "));
// for(let i =1;i<=num;i++){
//     for(let j=1;j<=num-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j=1;j<=i;j++){
//    process.stdout.write("*")
//     }
//     console.log();
    
// }


// let num =  Number(prompt("enter the num:"));
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j = 1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }

// home work prblm

// let num = Number(prompt("enter the num:"));
// for(i=1;i<=num;i++){
//     for(let j =1;j<=num;j++){
//         if(i==j || i+j==num+1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
    
// }
// let num = Number(prompt("enter the num:"));
// for(i=1;i<=num;i++){
//     for(let j =1;j<=2*num-1;j++){
//         if(i==j || i+j==2*num){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
    
// }
let n = Number(prompt("enter the num:"))
for (let i = 1; i <= n; i++) {
// inverted loop
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
// rigth angle loop
  for(let j=1;j<=i;j++){
     process.stdout.write("* ");
  }
  console.log();
} 