// Create a string variable called `fruits` with this value:
//`"Apple, Banana, Grape, Mango, Orange"`

let myString = "Apple, Banana, Grape, Mango, Orange";

//1. Print the **length** of the string.
console.log("this is my string", myString.length);

// 2. Convert the string to **uppercase** and print it.
console.log("uppercased", myString.toUpperCase());

// 3. Convert the string to **lowercase** and print it.
console.log("lowercased", myString.toLowerCase());

// 4. Convert the string into an **array of fruits** (split by comma) and print the array.
let fruitsArray = myString.split(",");
console.log(fruitsArray);

// 5. Replace `"Banana"` with `"Strawberry"` in the string and print it.
let replacedString = myString.replace("Banana", "Strawberry");
console.log(replacedString);

// 6. Use a **ternary operator** to check if the string contains `"Grape"`:

//     If yes, print `"Grape is in the list"`
//     If no, print `"Grape is not in the list"`

myString.includes("Grape")
  ? "Grape is in the list"
  : "Grape is not in the list";

// Optional Challenge

// Repeat the string  2 times and print the result.
console.log(myString.repeat(2));