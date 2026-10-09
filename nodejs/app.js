

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


class Animal {
  constructor(name,age){
    this.name = name
    this._age = age 
  }
  get age(){
    return this._age
  } 

  set age(value){
    if(value<0 ) return 
    this._age=value
  }

}
const sudeep = new Animal("sudeep",24)
sudeep.age = 45
console.log(sudeep);




