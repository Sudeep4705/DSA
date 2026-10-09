

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


function topKFrequent(nums,k){
  let map =  new Map()
  if(nums.length==1){
    return nums
  }
  for(let i=0;i<nums.length;i++){
    if(!map.has(nums[i])){
      map.set(nums[i],1)
    }else{
      map.set(nums[i],map.get(nums[i])+1)
    }
  }

  let arr = Array.from(map.entries())
console.log(arr);
  arr =  arr.sort((a,b)=>b[1]-a[1])
  let res = []
  for(let j=0;j<k;j++){
    res.push(arr[j][0])
  }
   return res
} 

let res  = topKFrequent([1,2,3,2,3,3,3],2)
console.log(res);





