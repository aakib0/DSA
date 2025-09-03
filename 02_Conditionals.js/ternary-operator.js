// ternary operator

// c  ? true ka code : false ka code 
// Syntax of the Ternary Operator

// condition ? expression_if_true : expression_if_false;
//  If the condition is true, the first expression (expression_if_true) runs.
// If the condition is false, the second expression (expression_if_false) runs.
// Basic Example
//  Using if-else (Traditional Way)


// let age = 20;
// let status;

if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

console.log(status); // Output: Adult
// Using Ternary Operator (Shorthand)


let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Output: Adult
// Why Use Ternary Operator?

// It reduces code length.
// Improves code readability.
// Best for simple if-else conditions.
// Real-Time Examples of Ternary Operator
// Checking User Login Status

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome, User!" : "Please Log In.";

console.log(message);
// Output: Welcome, User!
// 🔹 Real-World Use Case:

// Used in website navigation bars to display "Login" or "Logout" dynamically.
// 🔹 2️⃣ Checking Even or Odd Number

let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result); // Output: Odd

// 3️⃣ Price Discount Calculation

let price = 1200;
let discount = price > 1000 ? "10% Discount Applied" : "No Discount";

console.log(discount); // Output: 10% Discount Applied
// 🔹 Real-World Use Case:

// Used in e-commerce sites to offer discounts dynamically.
// 🔹 4️⃣ Displaying Dark/Light Mode Toggle

let theme = "dark";
let buttonText = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

console.log(buttonText); // Output: Switch to Light Mode


//nested ternary operattor

// let age = 20;
// let message = age >= 18 
  ? age >= 65 
    ? "Eligible for Senior Citizen Benefits" 
    : "Eligible to Vote" 
  : "Not Eligible to Vote";

console.log(message); // Output: Eligible to Vote
// ✅ How it works?

If age >= 18 → Checks if age >= 65
If yes, "Eligible for Senior Citizen Benefits"
Else "Eligible to Vote"
If age < 18 → "Not Eligible to Vote"
// 🔹 Real-World Use Case:

// Used in government portals to check citizens' eligibility for services.

Example: Assigning Grades Based on Marks

let marks = 85;

let grade = marks >= 90 ? "A" :
            marks >= 80 ? "B" :
            marks >= 70 ? "C" :
            marks >= 60 ? "D" : "F";

console.log(grade); // Output: B
✅ How it works?

marks >= 90 → "A"
marks >= 80 → "B" (Since 85 is greater than 80, "B" is assigned)
marks >= 70 → "C" (Skipped because marks is already matched)
marks >= 60 → "D"
Else "F"
🔹 Real-World Use Case:

// Used in grading systems for schools, universities, and online courses.
// 📌 3️⃣ Example: Finding the Largest of Three Numbers

let a = 10, b = 20, c = 15;

let largest = a > b 
  ? (a > c ? a : c) 
  : (b > c ? b : c);

console.log(largest); // Output: 20
✅ How it works?

If a > b
Check if a > c → If true, a is the largest, else c is largest.
Else (b > c)
If true, b is the largest, else c is the largest.