// check Prime
// Question: How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1.
// So, run a while loop and increase by 1.

function isPrime(n) {
  var divisor = 2;
  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

isPrime(137); // true
isPrime(237); // false

// Prime Factors

// Question: How could you find all prime factors of a number?

// Answer: Run a while loop. start dividing by two and if not divisible increase divider until u r done.

function primeFactor(n) {
  var factors = [];
  divisor = 2;
  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

primeFactor(69);
// [3, 23]

// What is the run time complexity?
// O(n).

// can you make this better
you can increase divisor by 2 form divisor = 3.
//Because, if a number is divisible by any even number it would divisible by 2.
// Hence, you dont need to divide by even numbers.
// Besides, you will not have a factor bigger than half of its value.
