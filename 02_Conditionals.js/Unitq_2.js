//   unit       /   price 
//   up to 100  /   Rs. 4.2/unit
//   101 - 200 /   Rs. 6/unit
//    201-400 /   Rs.  8/unit
//   more than 400 /   Rs.. 13/unit

// suppose bill is 120 

// 100 will calculated by Rs  4.2  unit
// 20 unit will calculated by Rs 6 unit 
// let unit = Number(prompt('enter unit'))

// let totalcost = 0 ;

// if(unit > 400){
//    totalcost += (unit - 400)* 13;
//    unit = 400;
// }
// if(unit > 200){
//    totalcost += (unit - 200) * 8;
//    unit= 200; //reset 
// }if(unit > 100){
//    totalcost += (unit - 100) * 6;
//    unit= 100; //reset 
// }if(unit > 0){
//    totalcost +=  unit * 4;
// }
// console.log(totalcost)





let gb = Number(prompt('Enter gb used'))

let totalcost = 0 ;

if(gb > 300){
   totalcost += (gb - 300)* 20;
   gb = 300;
}
if(gb > 150){
   totalcost += (gb - 150) * 15;
   gb= 150; //reset 
}if(gb > 50){
   totalcost += (gb - 50) * 10;
   gb = 50; //reset 
}if(gb > 0){
   totalcost +=  gb * 5;
}
console.log(totalcost)




let income = Number(prompt("Enter your annual income:"));

let totalTax = 0;

if (income > 1000000) {  // Above ₹10,00,000 → 30%
    totalTax += (income - 1000000) * 0.30;
    income = 1000000;
}
if (income > 500000) {  // ₹5,00,001 - ₹10,00,000 → 20%
    totalTax += (income - 500000) * 0.20;
    income = 500000;
}
if (income > 250000) {  // ₹2,50,001 - ₹5,00,000 → 5%
    totalTax += (income - 250000) * 0.05;
    income = 250000;
}
// Up to ₹2,50,000 → No tax

console.log("Total tax to be paid: ₹" + totalTax);















 let units = Number(prompt('Enter electricity units'));
let totalCost = 0;

 if(units >  400){
    totalCost = (units - 400) * 13;
    units = 400;//reset units (so remaining calculations happen on 400 and below)
 }
 if(units >  200 && units <= 400){
    totalCost += (units - 200) * 8;
    units = 200;//reset units (so remaining calculations happen on 400 and below)
 }
if(units >  100 && units  <= 200){
    totalCost += (units - 100) * 6;
    units = 100;//reset units (so remaining calculations happen on 400 and below)
 }
//  totalCost += units*4
 if(units > 0){
    totalCost += units * 4;
     //reset units (so remaining calculations happen on 400 and below)
 }
console.log(totalCost)


//  function calculateBill(units) {
//     let totalCost = 0;

//     if (units > 400) {
//         totalCost += (units - 400) * 13; // Above 400 units
//         units = 400;
//     }
//     if (units > 200) {
//         totalCost += (units - 200) * 8; // 201 - 400 units
//         units = 200;
//     }
//     if (units > 100) {
//         totalCost += (units - 100) * 6; // 101 - 200 units
//         units = 100;
//     }
//     if (units > 0) {
//         totalCost += units * 4.2; // Up to 100 units
//     }

//     return totalCost;
// }

// // 🔥 Example Usage:
// console.log("Bill for 120 units:", calculateBill(120)); // Output: 540
// console.log("Bill for 250 units:", calculateBill(250)); // Output: 1420
// console.log("Bill for 450 units:", calculateBill(450)); // Output: 3270