// array
// let arr = new Array(3)
// arr.push(10);
// console.log(arr);

const prompt = require("prompt-sync")();
// let arr =[]

// for(let i =1;i<=5;i++){
//   let ans =Number(prompt("enter the number:"))
//   arr.push(ans);

// }

// console.log(arr);
// let arr = new Array(5)

// for(i=0;i<arr.length;i++){
//     arr[i] = prompt("enter the number:")
// }

// console.log(arr);


// sum of array 

// let arr = [23,45,32,67,89]

// let max =arr[0]

// for(let i=1;i<arr.length;i++){
//     if(max>arr[i]){
//         max= arr[i]
//     }
// }
// console.log(max);

// 2nd max
// let arr = [34,56,78,45,90,80]
// let max = Math.max(arr[0],arr[1])
// let smax = Math.min(arr[0],arr[1])
// for(let i=2;i<arr.length;i++){
//      if(arr[i]>max){
//         smax=max
//         max =arr[i]  
//      }
//      else if(arr[i]>smax && max!=arr[i]){
//         smax=arr[i]    
//      }
   
            
// }
// console.log(max);
// console.log(smax);
// reveerse a array
// let arr = [50,45,67,89,90]
// let j = 0
// let temp  = new Array(arr.length)
// for(i=arr.length-1;i>=0;i--){
//     temp[j] = arr[i]
//     j++
// }
// console.log(temp);



// let arr = [34,45,67,89,90];
// let i=0 
// let j=arr.length-1
// while(i!=j){
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j]=temp
//     i++
//     j--
// }

// console.log(arr);


// swapping the zero
// let arr = [1,0,1,1,0,1,0,1,1,1]
// let i=0;
// let j=0;
// while(i<arr.length){
//     if(arr[i]==0){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr);

// let arr = [-1,2,3,-1,-5,7,-3]
// let i=0,j=0;
// while(i<arr.length){
//     if(arr[i]<0){
//  let temp = arr[i]
//     arr[i] =arr[j]
//     arr[j]=temp
//     j++
//     }
//     i++
   
// }
// console.log(arr);

// let arr =[20,30,56,76,90];
// let max = Math.max(arr[0],arr[1])
// let min = Math.min(arr[0],arr[1])

// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         min=max
//         max = arr[i]
//     }
//     else if(arr[i]>min){
//         min=arr[i]
//     }
// }

// console.log(max);
// console.log(min);

// let arr = [20,30,40,50,60]
// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length-1;i>=0;i--){
//         temp[j]=arr[i]
//         j++
// }
// console.log(temp);

// let arr = [-1,-2,1,6,8,-8,5,1,1]
// let i=0,j=0
// while(i<arr.length){
//     if(arr[i]<0){
//     let temp = arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     j++
//     }
//     i++
    
    
// }
// console.log(arr);

function  flattenArray(arr){
let arr1 = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           const flat =  flattenArray(arr[i])
           for(let j=0;j<flat.length;j++){
            arr1.push(flat[j])
           }
        }else{
            arr1.push(arr[i])
        }
    
    }
    return arr1
}

let res = flattenArray([1,[2,[3,4],5],6])
console.log(res);



