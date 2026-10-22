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

// function best(prices) {
//   let sum = 0;
//   let profit;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       profit = prices[i + 1] - prices[i];
//       sum += profit;
//     }
//   }
//   return sum;
// }

// let res = best([7, 1, 5, 3, 6, 4]);
// console.log(res);

// function majorityElement(nums){
//   let n = nums.length
// let map = new Map()
// for(let i=0;i<nums.length;i++){
//   if(!map.has(nums[i])){
//     map.set(nums[i],1)
//   }else{
//     map.set(nums[i],map.get(nums[i])+1)
//   }
// }
// const set =  new Set()
// for(let j=0;j<n;j++){
//   let el = map.get(nums[j])
//   console.log(el);
//   if(el>n/3){
//     set.add(nums[j])
//   }
// }
// return Array.from(set)
// }

// let res =  majorityElement([1,2,3])
// console.log(res);

// function sortColors(nums) {
//   let n = nums.length;
//   let k = 0,
//     i = 0;
//   j = nums.length-1;
//   while (k <= j) {
//     if (nums[k] === 0) {
//       let temp = nums[k];
//       nums[k] = nums[i];
//       nums[i] = temp;
//       k++;
//       i++;
//     } else if (nums[k] === 2) {
//       let temp = nums[k];
//       nums[k] = nums[j];
//       nums[j] = temp;
//       j--;
//       k++
//     } else {
//       k++;
//     }
//   }
//   return nums;
// }

// let res = sortColors([1, 0, 1, 2]);
// console.log(res);

// function validAnagram(s, t) {
//   if (s.length != t.length) {
//     return false;
//   }
//   let s_sorted = s.split("").sort().join("");
//   let t_sorted = t.split("").sort().join("");
//   if (s_sorted != t_sorted) {
//     return false;
//   } else {
//     return true;
//   }
// }

// let res = validAnagram("racecar", "carrace");
// console.log(res);

// function longestConsecutive(nums){
// if(nums.length===0){
//     return  0
// }
// nums.sort((a,b)=> a-b)

// let longest = 1
// let current = 1

// for(let i=1;i<nums.length;i++){
//     if(nums[i]===nums[i-1]){
//         continue
//     }
//     if(nums[i]===nums[i-1]+1){
//         current++
//     }
//     else{
//         current=1
//     }
//     longest= Math.max(longest,current)
// }
// return longest
// }

// let res = longestConsecutive([2,20,4,10,3,4,5])
// console.log(res);

// function  hasDuplicate(nums){
// let map  = new Map()
// for(let i=0;i<nums.length;i++){
//   if(!map.has(nums[i])){
//       map.set(nums[i],1)
//   }else{
//     map.set(nums[i],map.get(nums[i])+1)
//   }
// }
// console.log(map);

// for(let i=0;i<nums.length;i++){
//   let el = map.get(nums[i])
//   if(el>1){
//     return true
//   }
// }
// return false
// }

// let res = hasDuplicate([1, 2, 3, 3])
// console.log(res);

// function  hasDuplicate(nums){

// let arr = []
// for(let i=0;i<nums.length;i++){
//   if(!arr.includes(nums[i])){
//       arr.push(nums[i])
//   }else{
//     return true
//   }
// }
// return false
// }

// let res = hasDuplicate([1, 2, 3, 3])
// console.log(res);

// function twoSum(nums,target){
//     let map = new Map()
//     for(let i=0;i<nums.length;i++){
//     let el =  target - nums[i]
//        if(map.has(el)){
//             return [map.get(el),i+1]
//        }
//           map.set(nums[i],i+1)
//     }
//   }
// let res = twoSum([1,2,3,4],3)
// console.log(res);
// function threesum(nums) {
//   let res = [];
//   nums = nums.sort((a,b)=>a-b)
//   for (let i = 0; i < nums.length; i++) {
//     if(i>0 && nums[i]===nums[i-1])continue
//     let left = i + 1;
//     let right = nums.length - 1;
//     while(left < right){
//       let sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0){
//         res.push([nums[i], nums[left], nums[right]]);
//         while(left<right && nums[left]===nums[left+1])left++
//         while(left<right && nums[right]===nums[right-1])right--
//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return res;
// }
// let res = threesum([-1, 0, 1, 2, -1, -4]);
// console.log(res);
