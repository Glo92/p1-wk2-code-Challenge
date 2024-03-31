
function swapTheCase(str) {
    //the .split() method splits the string that you'll input into an array of substrings
    //.map() method is used to iterate over each letter of the string.

   return str.split('').map(function(letter) {
     if (letter === letter.toUpperCase()) {
       return letter.toLowerCase();
     } else {
       return letter.toUpperCase();
     }
     //the '.join()'method joins the array of substrings back into a string
   }).join('');
 }
 

 //input your string inside the paranthesis below
 console.log(swapTheCase(''))
 
 //example:
 //console.log(swapTheCase('The Quick Brown Fox')) ->the output will be 'tHE qUICK bROWN fOX'