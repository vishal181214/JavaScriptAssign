
// Question 1:-
// Write one example explaining how you can write a callback function ?

console.log('before the callback hell');

setTimeout(function () {
  console.log('Inside Callback function');
}, 2000);

console.log('After the callback function');

// Output :->
// before the callback hell
// After the callback function
// Inside Callback function


// Question 2:- 
// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.

// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid 
// structure that affects the readability and maintainability of the code. 

let production = () => {
  console.log("Numbers")
  setTimeout(() => {
    console.log("1")
    setTimeout(() => {
      console.log("2")
      setTimeout(() => {
        console.log("3")
        setTimeout(() => {
          console.log("4")
          setTimeout(() => {
            console.log("5")
            setTimeout(() => {
              console.log("6")
              setTimeout(() => {
                console.log("7")
              }, 7000)
            }, 6000)
          }, 5000)
        }, 4000)
      }, 3000)
    }, 2000)
  }, 1000)
};

production()

// Output :->
            // 1
            // 2
            // 3
            // 4
            // 5
            // 6
            // 7


// Question 3:-
// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.


let printNumber = (time, num) => {
  return new Promise((resolve, reject) => {
    if (num) {
      setTimeout(() => {
        resolve(num())
      }, time)
    }
    else {
      reject(console.log("No number"))
    }
  })
}
printNumber(0, () => console.log("Numbers"))
sec.then(() => {
  return printNumber(1000, () => console.log('1'))
})
  .then(() => {
    return printNumber(2000, () => console.log('2'))
  })
  .then(() => {
    return printNumber(3000, () => console.log('3'))
  })
  .then(() => {
    return printNumber(4000, () => console.log('4'))
  })
  .then(() => {
    return printNumber(5000, () => console.log('5'))
  })

  .then(() => {
    return printNumber(6000, () => console.log('6'))
  })
  .then(() => {
    return printNumber(7000, () => console.log('7'))
  })


// Output :->
            // 1
            // 2
            // 3
            // 4
            // 5
            // 6
            // 7


// Question 4:-
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, 
// and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected


function some(user) {
  return new Promise((resolve, reject) => {
      if (user === "Yes") {
          resolve();
      } else {
          reject();
      }
  });
}
  
some("Yes")
  .then(() => {
      console.log("Promise Resolved");
  })
  .catch(() => {
      console.log("Promise Rejected");
  });

// Output :->
//          Promise Resolved




// Question 5:-
// Create examples to explain callback function

function myCall(text, callback){ 
  var myText = "Callback Function " + text;
  callback(myText); 
}

function myCallTwo(text){
  console.log(text);
}

myCall("Example !", myCallTwo); 

// Output :->   Callback Function Example !



// Question 6:-
// Create examples to explain callback hell function

const backHell = () =>{
      setTimeout(() => {
          console.log("First callback function call");
          const arr = [1,2,3,4,5];
          setTimeout((arr) =>{
              const data = {
                name:'YoMe',
                age:25
              }
              console.log(`My name is ${data.name} and age is ${data.age}`);
              setTimeout((name) => {
                  data.gender = 'male';
                  console.log(`My name is ${data.name} and age is ${data.age}, gender is ${data.gender}`);
              },2000,data.name);
          },2000,arr);
      },2000);
  };
  
  backHell();

// Output :->
              // First callback function call
              // My name is YoMe and age is 25
              // My name is YoMe and age is 25, gender is male



// Question 7:-
// Create examples to explain promises function

const example = new Promise((resolve,reject) =>{ 
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("Error in fetching data");
    },2000);
});

example                                           
    .then((data) =>{
        console.log("The data resolved is",data);
    })

    .catch((error) =>{
        console.log(error);
    })


// Output :-> The data resolved is (5) [1, 2, 3, 4, 5]


// Question 8:-
// Create examples to explain async await function

async function promise(){
  const res = await fetch("https://api.github.com/users/2");
  const uses = await res.json();
  return uses;
}

let info = promise();
info.then((res) =>{
  console.log(res);
})
.catch(() =>{
  console.log("Error in fetching data");
})

// Output :-> {login: '2', id: 372966, node_id: 'MDQ6VXNlcjM3Mjk2Ng==', avatar_url: 'https://avatars.githubusercontent.com/u/372966?v=4', gravatar_id: '', …}


// Question 9:-
// Create examples to explain promise.all function

const p1 = new Promise((resolve, reject) =>{
  resolve("Inside first Promise");
})

const p2 = new Promise((resolve, reject) =>{
  resolve("Inside two Promise");
})

const p3 = new Promise((resolve, reject) =>{
  resolve("Inside third Promise");
})

Promise.all([p1,p2,p3]).then((res) =>{
  console.log(res);
})

// Output :-> ['Inside first Promise', 'Inside two Promise', 'Inside third Promise']