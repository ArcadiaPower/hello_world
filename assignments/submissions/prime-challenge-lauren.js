// Prime Challenge
// Given a number between 1-100, return true if the number is a prime.

function isNumberPrime(number) {

  for (var i = 2; i < number; i++) {  // start at 2 because 1 doesn't impact the definition of prime
    var remainder = number % i;

    if (remainder === 0) {
      return false;                   // not prime, it can be divided evenly into another number
    }
  }

  return number !== 1;                // if we've gotten here, it's prime (unless the number is 1)
}


// Instead of asking for a number, check all numbers!
for (var i = 1; i <= 100; i++) {
  var result = isNumberPrime(i);

  if (result === true) {
    console.log('The number ' + i + ' is PRIME!');
  } else {
    console.log(i + ' not prime.');
  }
}
