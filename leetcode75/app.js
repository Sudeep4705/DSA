

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


// function divisorString(str1,str2){

//     let temp= ""
//     for(let i=0;i<str2.length;i++){
//             temp = str2[i]
//         for(let j=0;j<str1.length;j++){
//             temp+=temp
//         }
//         console.log(temp);
        
//     }
// }

// let res = divisorString("ABCABC","ABC")
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

function candies(candies, extraCandies){
let max = 0
let arr = []
for(let i=0;i<candies.length;i++){
    if(max<candies[i]){
        max=candies[i]
    }
}

for(let j=0;j<candies.length;j++){
    let sum = 0
    sum= candies[j] + extraCandies
    if(sum>=max){
        arr[j]=true
    }else{
        arr[j]=false
    }
}
return arr
}

let res = candies([2,3,5,1,3],3)
console.log(res);
