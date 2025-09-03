// let arr = [];
// arr.push(100)
// arr.push(200)
// arr.push(300)
// arr.push(400)

// console.log(arr[4]);
// arr.pop();
// console.log(arr)

let a = 20;
// console.log(a);

//dynamic array

let arr1=[];

arr1[0]= 10;
arr1[1]= 20;
arr1[2]= 30;
arr1[3]= 40;

arr1[7]= 70;
// console.log(arr1)//epmty value 3 

let an = new Array(3)

arr1[0]= 10;
arr1[1]= 20;
arr1[2]= 30;
arr1[3]= 40;

arr1[10]= 150;


console.log(an)

// let earr = new Array[5];
// //0 , 1,  2,  3, 4
// for(let i=0 ; i<earr.length; i++){
//    earr[i] = Number(prompt('Enter a value'))
 
// }

// let  earr = new Array[10];

// for(let i = 0; i<earr.length; i++){
//  earr [i]= Number(prompt('Enter a value '))
// }

let arrn = [10,2,30,40,50]//traversing array and add 

let sum = 0;
for(let i = 0; i<arrn.length;i++){

    sum = sum + arrn[i];
}
// console.log(sum)

// find maximum, number of Array;

// without sorting find maximum array 

// let arrm = [10,95,35,70,50];

// let max =arrm[0];//suppose 1st arr is max array

// for(let i = 1; i<arrm.length; i++){
//   if(max<arrm[i]){
//     max = arrm[i];
//   }
// }
// console.log(max)

// find the minimum array 
// let arrm = [95,35,70,50,5,100,200];

// let min =arrm[0];//assume 1st arr is mininum

// for(let i = 1; i<arrm.length; i++){
//   if(min>arrm[i]){
//     min = arrm[i];
//   }
// }

// console.log(min)

// let max = arrm[0];

// for (let i = 1; i < arrm.length; i++) { 
//     if (max < arrm[i]) { // Change `>` to `<`
//         max = arrm[i]; 
//     }
// }

// console.log("Maximum value:", max); // Output: 200


// let arrm = [10, 95, 35, 70, 50, 100, 200];

// let min = Math.min(...arrm); // Spread operator `...`
// console.log("Minimum value:", min); // Output: 10


// let arrm = [ 10, 30 , 56 , 43, 29 , 64, 49 , 60  ];

// let max =Math.max(arrm[0],arrm[1]);//30
// let sMax =Math.min(arrm[0],arrm[1]);//10

// for(let i = 2; i<arrm.length; i++){
//   if(arrm[i]>max){
//     sMax = max;
//     max = arrm[i];
//   }
//   else if(arrm[i] > sMax){
//     sMax =arrm[i]
//   }
// }
// console.log(sMax)
// console.log(max)

let arrm = [95,35,70,50];

let max =Math.max(arrm[0],arrm[1]);
let smax =Math.min(arrm[0],arrm[1]);

for(let i = 2; i<arrm.length; i++){
  if(arrm[i]>max){
    smax=max;
    max = arrm[i];
  }
  else if(arrm[i] > smax && max != arrm[i]){
    smax =arrm[i]
  }
}
console.log(smax)


var searchInsert = function(nums, target) {
    let i = 0;
    for( i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        }else if(nums[i] > target) {
            return i;
        }
    }
    return i;
};