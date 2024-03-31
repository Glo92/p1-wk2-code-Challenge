

function arrayOfNumbers(num1, num2) {
    let numbers = [];
    
       //loop the array of numbers using the 'for loop'
        for (let i = num1; i <= num2; i++) {
            //using the .push() method to add the next number at the end
          numbers.push(i);
      }
    
    
  return numbers
  }
  //input your two sets of numbers inside the paranthesis below to get your output
  console.log(arrayOfNumbers())
  // EXAMPLe : console.log(arrayOfNumbers(4,7)) The output will be [4, 5, 6, 7]

  