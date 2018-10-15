### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  
  Boolean,Number,String,Objects,Array,Null,undefined and symbols
  //Googled Answer
The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
Boolean
Null
Undefined
Number
String
Symbol (new in ECMAScript 6)
and Object

#### 2. Look at this Javascript and try to predict, what will the browser's console show? 

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: Outside


Then, past the code in your console and explain why you were right/wrong.
function logIt() is an empty function no values aagined for that.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
 Javascript Object Notationis used to sent data from the server to client or client so server(text based)
 
  //Googled Answer
  JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue —  JavaScript provides a global JSON object that has methods available for converting between the two.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  if we use a function inside a function it can use the variables from its parent function
  
  //Googled Answer
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = used to assign a value
  == should return true if both sides are same regardles its data type
  === must be same and same data type
  
  
  //Googled Answer
By using = you assign a value to something.

x = 1 //x now equals 1
x = 2 //x now equals 2
By using == you check if something is equal to something else. This is not strict

x == 1 //is x equal to 1? (False)
x == 2 //is x equal to 2? (True)
true == 1 //does the boolean value of true equal 1? (True)
By using === you check if something is equal to something else. This is also strict.

x === 1 //is x equal to 1? (False)
x === 2 //is x equal to 2? (True)
true === 1 //does the boolean value of true equal 1? (False)
What strict does, in case it wasn't clear there, is that it checks not only the equality of the two values, it compares the types of the two values too. Using == will try and convert one side of the expression to be the same type as the other. For example, boolean and integer. The boolean value for true is 1, therefore does 1 equal 1? Yes, true. When using strict however, it does not try and convert before doing the comparison, it checks if true equals 1, which is doesn't as they are two different data types, and returns false.
