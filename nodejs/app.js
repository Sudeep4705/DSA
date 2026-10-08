// function hello() {
//     var a = 20
// }

// console.log(a);

// this
// const user = {
//     name: "Sudeep",

//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet();

// const user1 = {
//     name: "Sudeep",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };
// const user2 = {
//     name: "Goat",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };
// user1.greet()
// user2.greet()
// const user = {
//     name: "Sudeep",
//     arrow: () => {
//         console.log(this.name);
//     }
// };
// user.arrow();
function first(callback) {
  console.log("first");
  callback();
}

function second(callback) {
  console.log("second");
  callback();
}

function third(callback) {
  console.log("third");
  callback();
}

function fourth(callback) {
  console.log("fourth");
  callback();
}

function fifth() {
  console.log("fifth");
}

// first(function () {

//     second(function () {

//         third(function () {

//             fourth(function () {
//                 fifth();
//             });
//         });
//     });
// });

// const arr =[10,20,30]
// arr.push(21)
// console.log(arr);
// const arr = [20,30,40]
// arr.push(45)
// console.log(arr);

// function longestCommonPrefix(strs){
// let prefix  = strs[0]
//         for(let i=1;i<strs.length;i++){
//             while(!strs[i].startsWith(prefix)){
//                 prefix = prefix.slice(0,-1)
//                 if(prefix ===""){
//                     return ""
//                 }
//             }
//         }
//         return prefix
// }
// let res = longestCommonPrefix(["bat","bag","bank","band"])
// console.log(res);

// function normal(name,age){
// this.name = name
// this.age = age
// console.log("im pointing to ",this);
// }

// const newNormal = new normal ("sudeep",24)
// console.log(newNormal);

// function normal (){
//   console.log("hello");
//   console.log(this);
// }

// normal()

// let notnormal = ()=>{
//   console.log(this
//   );

// }

// notnormal()

// const obj = {
//   name: "sudeep",
//   hello: function () {
//     return {
//       greet: () => {
//         console.log(this);
//       },
//     };
//   },
// };
// obj.hello().greet();



// const user1 = { name: "Sudeep" };
// const user2 = { name: "Alice" };
// const user3 = {name:"Likhitha"}

// user1.greet = function() {
//   console.log("Hi, I'm " + user1.name); 
// };

// user2.greet = function() {
//   console.log("Hi, I'm " + user2.name);  
// };

// user3.greet = function(){
//   console.log("Hi, I'm " + user3.name);
  
// }

// user1.greet(); 
// user2.greet(); 
// user3.greet(); 

// const user1 = { name: "Sudeep" };
// const user2 = { name: "Alice" };


//  let greet = ()=> {
//   console.log("Hi, I'm " + this.name);  
// }

// user1.greet = greet;
// user2.greet = greet;
// user3.greet = greet;

// user1.greet(); 
// user2.greet(); 
// user3.greet(); 




