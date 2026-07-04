/* ==========================================================
   STRING MANIPULATION FUNCTIONS
   ========================================================== */

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/* ==========================================================
   ARRAY FUNCTIONS
   ========================================================== */

// 4. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// 5. Sum of Array
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// 6. Filter Array (based on a given condition function)
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

/* ==========================================================
   MATHEMATICAL FUNCTIONS
   ========================================================== */

// 7. Factorial
function factorial(n) {
  if (n < 0) return undefined; // factorial undefined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 8. Prime Number Check
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 9. Fibonacci Sequence up to a given number of terms
function fibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/* ==========================================================
   DEMO / TEST CALLS
   (Run this file with: node assignment.js)
   ========================================================== */

console.log('--- String Functions ---');
console.log(reverseString('Hello World'));      // dlroW olleH
console.log(countCharacters('Hello World'));     // 11
console.log(capitalizeWords('hello there friend')); // Hello There Friend

console.log('\n--- Array Functions ---');
const numbers = [4, 9, 1, 7, 3, 22, 5];
console.log('Max:', findMax(numbers));           // 22
console.log('Min:', findMin(numbers));           // 1
console.log('Sum:', sumArray(numbers));          // 51
console.log('Even numbers:', filterArray(numbers, n => n % 2 === 0)); // [4, 22]

console.log('\n--- Math Functions ---');
console.log('5! =', factorial(5));               // 120
console.log('Is 17 prime?', isPrime(17));        // true
console.log('Is 18 prime?', isPrime(18));        // false
console.log('Fibonacci (8 terms):', fibonacci(8)); // [0,1,1,2,3,5,8,13]

/* ==========================================================
   EXPORTS (optional - useful if importing into another file
   or a test suite with Node.js)
   ========================================================== */
module.exports = {
  reverseString,
  countCharacters,
  capitalizeWords,
  findMax,
  findMin,
  sumArray,
  filterArray,
  factorial,
  isPrime,
  fibonacci
};