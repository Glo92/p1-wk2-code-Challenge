
function primeNumbers(arrayNumber) {
    const primes = [];
// using the for...of method cause we're dealing with arrays
    for (let num of arrayNumber) {
      if (num > 1) {
        let Prime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            Prime = false;
            break;
          }
       }
        if (Prime) {
          primes.push(num);
        }
      }
    }
    return primes;
  }
  
  //input your array of numbers below to get prime numbers as output
  console.log(primeNumbers([]))
  //EXAMPLE
  //console.log(primeNumbers([1,2,3,4,5,6,7,8,9,10])); the output is [2,3,5,7]