
// Question 1 : =>

// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Output :=> Uncaught ReferenceError: Counter is not defined 


// Question 2 : =>

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); 
  },);
}

// Output :=> 1 
//            0 
//            3 


// Question 3 : =>

// Write a code to calculate area of a rectangle using inner function. In 
// this case outer function should accept parameter length and inner function 
// should accept parameter breadth.

function addSum (length) 
{
    return function (breadth) 
    {
        return length * breadth;
    };
}
    const area = addSum(5);
    console.log(area(3));
    
// Output :=>  15



// Question 4 : =>

// Take a variable in outer function and create an inner function to increase the counter every time it is called
// "Print Output

const countVal = function(){
    let val = 0;
    return function(){
        val++;
        console.log(`Value is ${val}`);
    }
}

const callVal = countVal();
callVal();
callVal();
callVal();
callVal();

// Output :=>  Value is 1
//             Value is 2
//             Value is 3
//             Value is 4



// Question 5 : =>

var a = 12;
(function () {
  alert(a);
})();
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


// Output :=>  12


// Question 6 : =>

var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output :=> outerArg = 123
//            innerArg = 456
//            outerVar = a
//            innerVar = b
//            globalVar = xyz