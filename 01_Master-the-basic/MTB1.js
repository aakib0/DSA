console.log(Math.round(10.4));//10
console.log(Math.round(10.6));//11
// round figure


console.log(Math.ceil(10.1));//11
console.log(Math.floor(10.8));//10
//Math.floor opposite of math.ceil 
// Math.ceil  takes value up if the value .1 does not matter

console.log(Math.trunc(18.98));
//na ceil ki tarah na floor ki tarah bs point ke baad ke number ko hatayega


console.log(Math.pow(2,5));//32 takes two parameter
// (method) Math.pow(x: number, y: number): number
// Returns the value of a base expression taken to a specified power.

// @param x — The base value of the expression.

// @param y — The exponent value of the expression.

// 2power1 = 2
// 2power2 = 2 × 2 = 4
// 2power3 = 2 × 2  × 2 = 8
// 2power4 = 2 × 2  × 2 × 2 = 16
// 2power5 = 2 × 2  × 2 × 2 × 2 = 32

console.log(Math.sqrt(16)); // 4 //finds square root
console.log(Math.cbrt(9)) ;

console.log(Math.abs(-15)); //abs/absolute
// converts the value negative to positive 
//positive will be positive 

console.log(Math.max(78,65,48));
//jitne parameter do return max value hogi 

console.log(Math.min(33,45,87));
//minimum value lega 33 

console.log(Math.floor(Math.random() * 10));


function generateOTP() {
    let otp = "";
    for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }
    return otp;
}

console.log(generateOTP()); 

let aa = 89.39388;

console.log(typeof aa.toFixed(2))
console.log(aa.toFixed(2))

console.log(typeof Number(aa.toFixed(2)))
console.log( Number(aa.toFixed(2)))
// converts value in string toFixed()

// Q  calculate area and parameter of rectangle

// l and b

let a = 5;
let b = 7;
// console.log(2* (a+b))

function checkParameters(a, b) {
    // console.log(2 * a + b);
}
//
// checkParameters(5, 7);


// area of triangle by heron's formula

let c = 10;
let d = 6;
let h  = 4;
//a+b> .c || a+c>  .b
let s = (c + d + h) / 2 ;
console.log(s)
console.log(Math.sqrt(s * (s - c) * (s - d) * ( s - h)))

//s is semi parameter
// sqrt of s *  (s-a) * (s - b) * (s - c)
function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2; // Step 1: Semi-perimeter
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Step 2: Apply formula
    return area;
}

// console.log(heronsFormula(7, 8, 9)); // Output: 26.83



//circumstance of circle
let r =12 ;

console.log(Number((2*Math.PI*r).toFixed(2)))