// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let array = ["jubayer", "masud", "horin", "JavaScript Book"];
console.log(array);
array.includes("JavaScript Book"); // is true.

console.log(array.includes("JavaScript Book"));

if (array.includes("JavaScript Book")) {
    console.log("JavaScript Book is in array");
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mangoo"); // is false.

console.log(fruits.includes("Mangoo"));


if (!(array.includes("Mangoo"))) {
    console.log("Mangoo is not in array");
}
