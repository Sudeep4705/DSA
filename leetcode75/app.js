// function mergestr(word1,word2){
// let i=0,j=0,str=""
//     while(i<word1.length && j<word2.length){
//             str+=word1[i]+word2[j]
//             i++
//             j++
//     }
//     while(i<word1.length){
//         str+=word1[i]
//         i++
//     }
//     while(j<word2.length){
//         str+=word2[j]
//         j++
//     }
//     return str
// }

// let res = mergestr("ab","pqrs")
// console.log(res);

// function gcdOfStrings(str1, str2) {
//     function canBuild(str,pattern) {
//         let temp = "";
//         while (temp.length < str.length) {
//             temp += pattern;
//         }
//         return temp === str;
//     }
//     let answer = "";
//     for (let i = 1; i <= Math.min(str1.length,str2.length); i++) {
//         let candidate = str1.slice(0, i);
//         console.log(candidate);
//         if (canBuild(str1, candidate) && canBuild(str2, candidate)) {
//             answer = candidate;
//         }
//     }
//     return answer;
// }

// console.log(gcdOfStrings("ABCABC", "ABC"));

// function candies(candies, extraCandies){
// let max = 0
// let arr = []
// for(let i=0;i<candies.length;i++){
//     if(max<candies[i]){
//         max=candies[i]
//     }
// }

// for(let j=0;j<candies.length;j++){
//     let sum = 0
//     sum= candies[j] + extraCandies
//     if(sum>=max){
//         arr[j]=true
//     }else{
//         arr[j]=false
//     }
// }
// return arr
// }
// let res = candies([2,3,5,1,3],3)
// console.log(res);

// function PlaceFlower(flowerbed,n){
//     let count = 0
//     for(let i=0;i<flowerbed.length;i++){
//         if(flowerbed[i]===0){
//            const leftempty = (flowerbed[i-1]===0)
//            const rightempty =  (flowerbed[i+1]===0)
//            if(leftempty && rightempty){
//             flowerbed[i] =
//             count++
//             i++
//             if(count>=n) return true
//            }
//         }

// }
//   return count>=n

// }
// let res = PlaceFlower([1,0,0,0,1],2)
// console.log(res);

// function reVowels(s) {
//   let newstr = s.split("");
//   let i = 0,j = newstr.length - 1;
//   let Vowels = "aeiouAEIOU";
//   while (i < j) {
//       while(i<j && !Vowels.includes(newstr[i]))i++
//       while(i<j && !Vowels.includes(newstr[j]))j--
//       let temp = newstr[i]
//       newstr[i]=newstr[j]
//       newstr[j]=temp
//       i++
//       j--
//   }
//   return newstr.join("");
// }
// let res = reVowels("IceCreAm");
// console.log(res);

// function RVS(s){
//   let newstr =  s.replace(/\s+/g, ' ').trim()
// return newstr.split(" ").reverse(" ").join(" ")
// }

// let res = RVS("a good   example")
// console.log(res);

// function productExceptSelf(nums){
//     let n = nums.length
// const right = new Array(n)
// const left = new Array(n)
// left[0]=1
// right[n-1]=1
// // left
// for(let i=1;i<n;i++){
//      left[i] = left[i-1]*nums[i-1]
//       console.log(left[i-1],nums[i-1]);
// }
// //right
//  console.log("tthis right loop");
// for(let i=n-2;i>=0;i--){
//     right[i] = right[i+1] * nums[i+1]
//     console.log(right[i+1] ,nums[i+1]);

// }
// const answer = []
// for(let i=0;i<n;i++){
//     let product = left[i]*right[i]
//     answer.push(product)
// }
// return answer
// }
// let res =  productExceptSelf([1,2,3,4])
// console.log(res);

// i need return true if array consist 3 number where 1st<2nd<3rd else return false
// no need in order i can be anywhere

// function increasingTriplet(nums){
//   let n = nums.length;
//   let first = Infinity
//   let second = Infinity

//   for (let i = 0; i < n; i++) {
//       if(nums[i]<=first){
//         first=nums[i]
//       }
//       else if(nums<=second){
//         second=nums[i]
//       }
//       else{
//           return true
//       }
//   }
//   return false

// }

// let res = increasingTriplet([1,2,1,3]

// );
// console.log(res);

// u have a array of strings
// i need to begin with empty string

// function compress(chars) {
//   let s = "";
//   if (chars.length <= 1) {
//     s = chars;
//     return;
//   }
//   chars=chars.join("")
//   let count;
//   let check = "";
//       for (let i = 0; i < chars.length; i++) {
//          check = chars[i];
//         if(!s.includes(check)){
//           count = 1;
//         s += chars[i];
//         for (let j = i + 1; j < chars.length; j++) {
//           if (chars[i] === chars[j]){
//             count++;
//           }
//         }
//         if(count==1){
//           count=""
//         }else{
//           s += count;
//         }

//         }
//       }

//          return s.split("")

// }
// let res = compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
// console.log(res);

// function compress(chars) {
//   let write = 0;
//   let read = 0;
//   let count;
//   let check = "";
//   while (read < chars.length) {
//     let currChar = chars[read];
//     let count = 0;
//     while (read < chars.length && chars[read] === currChar) {
//       read++;
//       count++;
//     }
//     chars[write] = currChar;
//     write++;
// console.log(count);

//     if(count>1){
//       let countStr = String(count)
//       for(let i=0;i<countStr.length;i++){
//         chars[write] = countStr[i]
//         write++
//       }
//     }
//   }
//   return write
// }
// let res = compress([
//   "a",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
//   "b",
// ]);
// console.log(res);


// u have a integer array 
// u need to move the zero to end of the array 
// i need to maintain the order






// function MoveZeroes(nums){
// let i=0,j=0
// while(i<nums.length){
//   if(nums[i]>0 || nums[i]<0){
//     console.log(nums[i]);
    
//     let temp = nums[i]
//     nums[i] =nums[j]
//     nums[j]=temp
//     i++
//     j++
//   }else{
//     i++
//   }
// }
// return nums
// }


// let res = MoveZeroes([0,1,0,3,12])
// console.log(res);


// function isSubsequence(s,t){
// let n = s.length
//  let count1=0
//  let count2=0
//   let arr =[]
//   let str = ""
//   for(let i=0;i<s.length;i++){
//     if(!str.includes(s[i])){
//       count2++
//     }else{
//       str+=s[i]
//     }
//     for(let j=0;j<t.length;j++){
//         if(s[i]===t[j]){
//           arr.push(j)
//           count1++
//         }
//     }
//   }
//   console.log(arr);
//   if(count1<n){
//     return false
//   }
//   else if(count1!=count2){
//     return false
//   }
  
//   else{
//     for(let k=0;k<arr.length;k++){
//       console.log(arr[k]);
//       if(arr[k]>arr[k+1]){
//           return false
//       }
//   }
//   }

//   return true
  
  

// }

// let res = isSubsequence("acb","ahbgdc")
// console.log(res);



function isSubsequence(s,t){
  let i=0
  for(let j=0;j<t.length && i<s.length;j++){
    if(s[i]==t[j]){
      i++
    }
  }
  return  i===s.length
}

let res =  isSubsequence("acb","ahbgdc")
console.log(res);
