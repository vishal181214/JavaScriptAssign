
// Q1 Create a function with zero parameter having console statement
function display() 
{
    console.log("Hello");
}
display();

// Output : => Hello

// Q2 Create a function which takes two values as a parameter and print the sum of them as "Sum of 3 and 4 is 7"


function sum(a,b)
{
    console.log(a+b);
}
sum(3,4)

// Output:=> 7


// Q3 Create one arrow function

const add = (a,b) =>{
    let result = a + b;
    console.log(result);
}

add(3,4);

// Output:=> 7


//Q.4 Print Output

var x =21;
var girl = function()
{
    console.log(x);
    var x = 20;
}

girl();

// Output:=>undefined


// Q5. Print Output
var x = 21;
girl();
console.log(x);
function girl() {
    console.log(x);
    var x = 20;
}

// Output:=>undefined  on line no 54
// Output:=> 21        on line 52

//Q.6 Print Output

var x = 21;
a();
b();
console.log(a);
a = function(){
    x = 20;
    console.log(x);
};
b = function(){
    x = 40;
    console.log(x);
};

// Output:=>  Uncaught ReferenceError: a is not defined
//            at hadnson.js:55:1


// Q.7 Write a function that accepts parameter n and returns factorial of n 

function fact(num) {
    if (num < 0) 
          return -1;
      
    else if (num == 0) 
        return 1;
      
      else {
          return (num * fact(num - 1));
      }
  }
  console.log(fact(5));

//   Output :=> 120