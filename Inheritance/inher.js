
// Q1 : Create 2 objects - parent and Child. Attach methods to parent and use those methods in child object using parents prototype?

const demo = {
    fName: "Jay",
    lName: "Singh",
    prof : "Coder",
    showDetails: function (){
        console.log(` Name is ${this.fName} ${this.lName}, working professional as ${this.prof}`);
    }
}

const demoOne = {
    fName: "RaOne",
    lName: "Joy",
    prof: "Actor",
}

demoOne.__proto__ = demo;
demo.showDetails.call(demoOne);

// Output :=> Name is RaOne Joy, working professional as Actor

// Q2 : Write code to explain prototype chaining 

const assgn = {
    fName: "Jay",
    lName: "Singh",
    prof : "Coder",
    showDetails: function (){
        console.log(` Name is ${this.fName} ${this.lName}, working professional as ${this.prof}`);
    }
}

const assgnOne = {
    fName: "RaOne",
    lName: "Joy",
    prof: "Actor",
}

assgnOne.__proto__ = assgn;
assgn.showDetails.call(assgnOne);
console.log(assgnOne.__proto__);
console.log(assgnOne.__proto__.__proto__);
console.log(assgnOne.__proto__.__proto__.__proto__);

// Output :=> {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} 
            //   {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
            //   null


// Q3 : Add method to calculate sum of all elements in array's protype, use that method to calculate sum for multiple arrays 


Array.prototype.sum = Array.prototype.sum || function (){
    return this.reduce(function(a,b){return a+b},0);
  };

const arr = [1,3,6,2,5,4];
console.log(arr.sum());


// Output :=> 21 


// Q4 : Write a javascript function to retrive all the names of objects own and inherited properties 

const student ={
    name: "Shubh",
    lname: "gandhi",
    age : 25,
};


const studentTwo = Object.create(student, {
    dept:{
        value: 'Developer',
    },

    stud:{
        name: "Shyam",
        lname:"Joy",
        age:20,
    },

    stud1:{
        name: "Shubh",
        lname: "gandhi",
        age : 25,
    }
})

console.log(Object.getOwnPropertyNames(studentTwo));