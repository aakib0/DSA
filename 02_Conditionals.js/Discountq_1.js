// let ans = Number(prompt("what is your age"))
let ans = prompt("what is your age");


if(isNaN(ans)){
    console.log('wrong input')
}else if(ans >= 18){
    console.log('you are eligible to vote')
}
else{
    console.log('you are not eligible to vote')
}
 

// Range Questions


//shop discount   1
// Amount    /       Discount
                     
// 0-5000     /        0%
// 5001-7000   /       5%
// 7001-9000    /      10%
// more than 9000  /   20%

// let originalPrice = Number(prompt('what is the final amount ?'))

// let discount =0;

// if(originalPrice > 0 &&  originalPrice <= 5000){
//   discount = 0 
// }
// else if(originalPrice > 5001  && originalPrice <= 7000 ){
//   discount = 5
// }
// else if(originalPrice > 7000  && originalPrice <= 9000 ){
//   discount = 10
//   }
//   else if(originalPrice > 9000 ){
//    discount = 20
//   }
//   else{
//     isNan(originalPrice)
//   }
// console.log(originalPrice - Math.floor((discount * originalPrice)/ 100));
  


// let originalAmount = Number(prompt("what is the final Amount ?"));
// //formula of discount => discoutn * amount by 100

// if(originalAmount > 0 && originalAmount <= 5000){
//     console.log(originalAmount)
// }else if(originalAmount > 5001 && originalAmount<= 7000 ){
//     console.log( originalAmount - Math.floor((5 * originalAmount )/ 100));
// }
// else if(originalAmount > 7001 && originalAmount<= 9000 ){
//     console.log( originalAmount - Math.floor((10 * originalAmount )/ 100));
// }
// else if(originalAmount > 9001 ){
//     console.log( originalAmount - Math.floor((20 * originalAmount )/ 100));
// }
// else{
//     console.log('wrong input');
// }

// A 5% discount is applied using the formula:

// originalAmount - Math.floor((5 * originalAmount) / 100)
// This means:
// Calculate 5% of originalAmount:

// ( 5 × originalAmount) ÷ 100

// (5 × originalAmount ) ÷ 100
// Round it down using Math.floor()

// Subtract the discount from originalAmount
// Print the final discounted amount

// Discounted Price = originalAmount − ⌊ 5 × originalAmount ⌋
                                         //  -----
                                        //    100