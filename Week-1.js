// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.


function AlphabetSuop(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var Output = reverseArray.join("");
  console.log(Output);
  return Output;


}

AlphabetSuop("hooplah");

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
