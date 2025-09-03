Nested Ternary Operator in JavaScript – In-Depth Explanation with Real-Time Examples
The nested ternary operator allows you to handle multiple conditions in a concise way. It is a shorthand for multiple if-else statements.

📌 1️⃣ Basic Syntax of Nested Ternary Operator

condition1 
  ? expression_if_condition1_true 
  : condition2 
    ? expression_if_condition2_true 
    : expression_if_all_false;
✅ First condition (condition1) is checked.
If true, the first expression executes.
If false, it checks condition2.
If condition2 is true, it executes the second expression.
Otherwise, it executes the default expression.
📌 2️⃣ Example: Assigning Grades Based on Marks

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

Used in grading systems for schools, universities, and online courses.
📌 3️⃣ Example: Finding the Largest of Three Numbers

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
🔹 Real-World Use Case:

Used in financial systems to find the highest sales amount among multiple values.
📌 4️⃣ Example: Check Voting Eligibility

let age = 20;
let message = age >= 18 
  ? age >= 65 
    ? "Eligible for Senior Citizen Benefits" 
    : "Eligible to Vote" 
  : "Not Eligible to Vote";

console.log(message); // Output: Eligible to Vote
✅ How it works?

If age >= 18 → Checks if age >= 65
If yes, "Eligible for Senior Citizen Benefits"
Else "Eligible to Vote"
If age < 18 → "Not Eligible to Vote"
🔹 Real-World Use Case:

Used in government portals to check citizens' eligibility for services.
📌 5️⃣ Example: Membership Discount Calculation
js
Copy
Edit
let isPremium = true;
let purchaseAmount = 500;

let finalPrice = isPremium 
  ? purchaseAmount > 1000 
    ? purchaseAmount * 0.85  // 15% discount
    : purchaseAmount * 0.90  // 10% discount
  : purchaseAmount; // No discount for non-premium users

console.log(finalPrice); // Output: 450 (10% discount applied)
✅ How it works?

If the user is a premium member, check purchase amount:
Above Rs. 1000 → 15% discount
Below Rs. 1000 → 10% discount
If not a premium member, no discount is applied.
🔹 Real-World Use Case:

Used in e-commerce platforms for loyalty discounts.
📌 6️⃣ Example: Light & Dark Mode Toggle
js
Copy
Edit
let theme = "dark";

let backgroundColor = theme === "dark" 
  ? "black" 
  : theme === "light" 
    ? "white" 
    : "gray"; // Default color

console.log(backgroundColor); // Output: black
✅ How it works?

If theme === "dark" → Background is "black".
If theme === "light" → Background is "white".
If neither, use "gray" as a default fallback.
🔹 Real-World Use Case:

Used in web apps for theme switching.
📌 7️⃣ Example: Password Strength Checker
js
Copy
Edit
let password = "securePass123";

let strength = password.length >= 12 
  ? "Strong" 
  : password.length >= 8 
    ? "Moderate" 
    : "Weak";

console.log(strength); // Output: Strong
✅ How it works?

12+ characters → "Strong"
8-11 characters → "Moderate"
Below 8 characters → "Weak"
🔹 Real-World Use Case:

Used in authentication systems to ensure strong passwords.
📌 8️⃣ Example: Movie Ticket Pricing
js
Copy
Edit
let age = 16;
let ticketPrice = age < 12 
  ? 5 
  : age < 18 
    ? 8 
    : 12;

console.log(`Ticket Price: Rs. ${ticketPrice}`); // Output: Rs. 8
✅ How it works?

Under 12 years → Rs. 5
12-17 years → Rs. 8
18+ years → Rs. 12
🔹 Real-World Use Case:

Used in movie theaters and amusement parks.
📌 9️⃣ Example: Detect Browser Type
js
Copy
Edit
let userAgent = navigator.userAgent.toLowerCase();

let browser = userAgent.includes("chrome") 
  ? "Google Chrome" 
  : userAgent.includes("firefox") 
    ? "Mozilla Firefox" 
    : "Other Browser";

console.log(browser);
✅ How it works?

Checks the browser user agent.
Assigns browser name dynamically.
🔹 Real-World Use Case:

Used in web apps for browser-specific optimizations.
📌 1️⃣0️⃣ Nested Ternary Operator with JSX in React
jsx
Copy
Edit
function Status({ online, busy }) {
  return (
    <p>
      {online 
        ? busy 
          ? "User is Busy" 
          : "User is Online" 
        : "User is Offline"}
    </p>
  );
}

// Usage
<Status online={true} busy={false} />; // Output: "User is Online"
✅ How it works?

If online === true, check if busy === true
If busy, "User is Busy"
If not, "User is Online"
If online === false, "User is Offline"
🔹 Real-World Use Case:

Used in chat applications to show user status.
🔥 Summary of Nested Ternary Use Cases
Use Case	Example	Real-World Application
Grading System	marks >= 90 ? "A" : marks >= 80 ? "B" : "C"	Exam grading
Find Largest Number	a > b ? (a > c ? a : c) : (b > c ? b : c)	Finance systems
Voting Eligibility	age >= 18 ? age >= 65 ? "Senior" : "Adult" : "Minor"	Government portals
Dark Mode Toggle	theme === "dark" ? "black" : "white"	Web apps
Password Strength Checker	password.length >= 12 ? "Strong" : "Weak"	Authentication systems
🚀 Key Takeaways
✔ Nested Ternary Operators simplify multiple conditions.
✔ They replace if-else chains, making code shorter.
✔ Useful for grading, authentication, pricing, and UI logic.