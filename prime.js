//You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers
//from the original array. How would you implement this function efficiently,
 //ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array?
 //For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

// declare the function to check if the number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    if (num % 2 === 1) return true;}
   
//filter the  prime numbers in the array
function findPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}
//declaring the array and running it to select the prime numbers
const inputArray = [10,11,12,13,14,15,16,17];
const primeNumbers = findPrimes(inputArray);
console.log(primeNumbers); 
