
//function that convert a  number to a string,
//the contents of which depends on the number’s prime factors.

//function that converts a number into string
function numberToString(number) {
 if (typeof number !== 'number') {
   return 'argument should be a number';
 }else if (number !== parseInt(number, 10)) {
   return 'number should be an integer';
 }else {
   let output = '';
   if (primeFactor(number).indexOf(3) !== -1) output += 'Pling';
   if (primeFactor(number).indexOf(5) !== -1) output += 'Plang';

   if (primeFactor(number).indexOf(7) !== -1) output += 'Plong';

   return output || String(number);
 }
}

//function that check if a given number is a prime number
function isPrime(number) {
 if (typeof number !== 'number') {
   return 'argument should be a number';
 } else if (number !== parseInt(number, 10)) {
   return 'number should be an integer';
 } else {
   if (number < 2) {
     return false;
   } else {
     for (let factor = 2; factor < number; factor++) {
       if (number % factor === 0) {
         return false;
       }
     }
   }
   return true;
 }
}

//function that return factors of a number
function primeFactor(number) {
 let primeFactors = [];
 if (typeof number !== 'number') {
   return 'argument should be a number';
 } else if (number !== parseInt(number, 10)) {
   return 'number should be an integer';
 } else {
   for (let factor = 1; factor < number; factor++) {
     if (number % factor === 0 && isPrime(factor)) {
       primeFactors.push(factor);
     }
   }
 }
 return primeFactors;
}


module.exports = numberToString
