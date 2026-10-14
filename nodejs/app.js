

// function groupAnagrams(strs){

// let map = new Map()
// for(let s of strs){
//   const sorted = s.split("").sort().join("")
//   if(!map.has(sorted)){
//     map.set(sorted,[])
//   }
//    map.get(sorted).push(s)
  
// }
// return Array.from(map.values())
// }

// let res = groupAnagrams(["act","pots","tops","cat","stop","hat"])
// console.log(res);


// class Animal {
//   constructor(name,age){
//     this.name = name
//     this._age = age 
//   }
//   get age(){
//     return this._age
//   } 

//   set age(value){
//     if(value<0 ) return 
//     this._age=value
//   }

// }
// const sudeep = new Animal("sudeep",24)
// sudeep.age = 45
// console.log(sudeep);


// function topKFrequent(nums,k){
//   let map =  new Map()
//   if(nums.length==1){
//     return nums
//   }
//   for(let i=0;i<nums.length;i++){
//     if(!map.has(nums[i])){
//       map.set(nums[i],1)
//     }else{
//       map.set(nums[i],map.get(nums[i])+1)
//     }
//   }

//   let arr = Array.from(map.entries())

//   arr =  arr.sort((a,b)=>b[1]-a[1])
//   console.log(arr);
  
//   let res = []
//   for(let j=0;j<k;j++){
//     res.push(arr[j][0])
//   }
//    return res
// } 

// let res  = topKFrequent([1,2,3,2,3,3,3],2)
// console.log(res);


  // class BankAccount{
  // #amount = 30000
  //   constructor(amount){
  //     this.amount = amount
  //   }

  //   get aceess(){
  //     return this.#amount
  //   }

  //   set aceess(amount){
  //     if(amount>3000){
  //       this.#amount = amount
  //     }
  //   }
  // }
  // const bank1 = new BankAccount(5000)
  // console.log(bank1.#amount);
  // console.log(bank1.aceess);
  // console.log(bank1.aceess = 80000);
  // console.log(bank1.aceess);
  // console.log(bank1.amount);




  

  // class Character{
  //   constructor(name,health,weapon){
  //     this.name = name,
  //     this.health = health,
  //     this.weapon = weapon
  //   }

  //   attack(){
  //     console.log(`${this.name} shoots using this ${this.weapon}`);
  //   }
  // }

  // class Warrior extends Character{
  //   specialMove(){
  //     console.log(`${this.name} casts a fireball!`);
  //   }
  // }

  // const player1 = new Warrior("sudeep",100,"AKM")
  // console.log(player1.attack());
  

// class Animal {
//   constructor(name) {
//     this.name = name; 
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); 
//     this.breed = breed; 
//   }
// }

// const dog = new Dog("Rex", "Labrador");
// console.log(dog.name);  
// console.log(dog.breed); 



// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); 
//     this.breed = breed;
//   }

//   eat() {
//     super.eat(); 
//     console.log(`${this.name} is eating dog food`);
//   }
// }

// const dog = new Dog("Rex", "Labrador");
// dog.eat();


// class CoffeeMachine {
//   #waterTemperature = 20;
//   #grinderStatus = "off";
//   #pumpPressure = 0;
//   #brewingTime = 0;

//   brewCoffee() {
//     this.#heatWater();
//     this.#grindBeans();
//     this.#brew();
//     console.log("Coffee is ready!");
//   }
//   #heatWater() {
//     this.#waterTemperature = 92;
//   }

//   #grindBeans() {
//     this.#grinderStatus = "on";
//     setTimeout(() => {
//       this.#grinderStatus = "off";
//     }, 2000);
//   }

//   #brew() {
//     this.#pumpPressure = 9;
//     this.#brewingTime = 25;
//     setTimeout(() => {
//       this.#pumpPressure = 0;
//     }, 25000);
//   }
// }

// const machine = new CoffeeMachine();

// machine.brewCoffee(); 

// class Character {
//   attack() {
//     console.log("Basic attack!");
//   }
// }

// class Warrior extends Character{
//   attack() {
//     console.log("Warrior swings a sword!"); 
//   }
// }

// class Mage extends Character {
//   attack() {
//     console.log("Mage casts a fireball!"); 
//   }
// }

// class Archer extends Character {
//   attack() {
//     console.log("Archer name is badmash"); 
//   }
// }
// const characters = [
//   new Warrior(),
//   new Mage(),
//   new Archer()
// ];
// console.log(characters);
// characters.forEach(char => {
//   char.attack(); 
// });
// u have one array called nums 
// n = nums.length
// i need to return the majority element whose occurance of el > n/2
function  majorityElement(nums){
let count = 1,majority = nums[0]
let count1;
let count2;
for(let i=1;i<nums;i++){
  if(nums[i]===majority){
      count++
  }

}


}

let res = majorityElement([5,5,1,1,1,5,5])
console.log(res);





