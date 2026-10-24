" use strict"; //it means treat all js code newer version of js code

//alert("hello world"); // alert is used to show message in popup     

let name = "John Doe"; // string data type
let age = 30; // number data type
let isStudent = true; // boolean data type
let hobbies = ["reading", "gaming", "coding"]; // array data type
let address = { street: "123 Main St", city: "New York" }; // object data type
let nullValue = null; // null data type
let undefinedValue; // undefined data type

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);  

//number => 2 to power 53 -1
// bigint => 2 to power 53 -1
// string => "hello world" or 'hello world' or `hello world`
// boolean => true or false
// null => null
// undefined => undefined (abhi tak koi value assign nhi kiya h)
//symbol => unique and immutable data type

//object => object is a collection of key value pairs

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof hobbies); // Output: object
console.log(typeof address); // Output: object
console.log(typeof nullValue); // Output: object (this is a known issue in JavaScript)
console.log(typeof undefinedValue); // Output: undefined

//undefined apne aap m ek type h but null is a value and it is an object type

