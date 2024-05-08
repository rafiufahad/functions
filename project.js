// STRING MANIPULATION FUNCTIONS:

// // Reverse a String: Write a function that reverses a given string.
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); 

// // Count Characters: Create a function that counts the number of characters in a string.
// function countCharacters(str) {
//     return str.length;
// }
// console.log(countCharacters("hello")); 

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// function capitalizeWords(sentence) {
//     let words = sentence.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// console.log(capitalizeWords("hello world"));

// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// function findMax(num) {
//     return Math.max(...num);
// }
// function findMin(num) {
//     return Math.min(...num);
// }
// const num = [5, 3, 9, 1, 7];
// console.log(findMax(num)); 
// console.log(findMin(num)); 

// Sum of Array: Create a function that calculates the sum of all elements in an array.
// function sumArray(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; ) {
//         sum += num[i];
//     }
//     return sum;
// }

// const num = [1, 2, 3, 4, 5];
// console.log(sumArray(num));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
// function filterArray(array, condition) {
//     const filteredArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (condition(array[i])) {
//             filteredArray.push(array[i]);
//         }
//     }
//     return filteredArray;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = filterArray(numbers, (num) => num % 2 === 0);
// console.log(filteredNumbers);

// Factorial: Write a function to calculate the factorial of a given number
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }
// console.log(factorial(4));

// Prime Number Check: Create a function to check if a number is prime or not.
// function isPrime(number) {
//     if (number < 2) {
//         return `${number} is not a Prime Number`;
//     }
   
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return `${number} is not a Prime Number`;
//         }
//         else {
//             return `${number} is a Prime Number`;
//         }
//     }
// }
// console.log(isPrime(1))

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
// function generateFibonacci(n) {
//     let fibonacciSequence = [0, 1]; 
//     for (let i = 2; i < n; i++) {
//         let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//         fibonacciSequence.push(nextFibonacci);
//     }
    
//     return fibonacciSequence;
// }

// console.log(generateFibonacci(10)); 


