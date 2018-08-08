function result(a) {
  if (a / 3 === 0) {
    console.log("Divisable by three");
  } else {
    console.log("Not divisible by three");
  }
}
// return result
//function call

result(8)

var person = {name:"Sunil" , age:41 , nationality:"Indian",
getdata: function(){return this.name+ "-" + this.age+ "-" +this.nationality}};
person.name
person.age
person.nationality

console.log(person.getdata());. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var names = ["mat" , "jack" , "pat" , "lee"];
console.log(names[0]);
console.log(names);

function AlphabetSoup(str) {
  var splitStrig = str.split("");
  var reverseArray = splitStrig.reverse();
  var Output = reverseArray.join("");
  console.log(Output);
  return Output;
}
AlphabetSoup("hooplah");  

var nums = [1,5,88,2,5,42,57,101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var out = ""
for (var i =0; i<nums.length; i++) {out+= nums[i] + ":" + nouns [i] + " , ";

}
console.log(out);
