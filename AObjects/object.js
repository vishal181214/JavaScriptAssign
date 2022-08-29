let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

    let result = studentRecords.map(a => (a.name).toUpperCase());
    console.log(result);

// OutPut :=> ['JOHN', 'BABA', 'YAGA', 'WICK']

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let arr = [];
let i =0;
let res = studentRecords.map((element , index) => {
    if(element.marks >= 50) 
     arr[i] = element;
    else
        return element;
    i++;
});
console.log(arr);

// Output :=> [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let arrOne = [];
let j =0;
let resultOne = studentRecords.map((element , index) => {
    if(element.marks >= 50 && element.id > 120) 
    arrOne[j] = element;
    else
        return element;
    j++;
});
console.log(arrOne);

// Output :=> {name: 'John', id: 123, marks: 98}


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let marks = 0;
let sum = studentRecords.map((element , index) => {
    marks += element.marks;
});
console.log(marks);

// Output :=> 241

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let Arr = [];
let k =0;
let name = studentRecords.map((element , index) => {
    if(element.marks >= 50) 
     Arr[k] = element.name;
    else
        return element.name;
    k++;
});
console.log(Arr);

// Output:=> ['John', 'Wick']



//  Question 6: This time we are required to print the sum of marks of the students with id > 120.

let brr = [];
let ans =0;
let stud = studentRecords.map((element , index) => {
    if(element.id > 120) 
     ans += element.marks;
    else
        return element.name;
});
console.log(ans);


// Output :=> 143



// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let mark = [];
let a =0;
let student = studentRecords.map((element , index) => {
    if(element.marks >= 50) 
        mark[a] = element.marks;
    else
        mark[a] = element.marks + 15;
    a++;
});
console.log(mark);

// Output :=>[98, 38, 60, 75]


// Question 7:

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let One =  {name: 'John', class: 10, rollNo : 8 };

let Two =  {name: 'Joy', class: 12, rollNo : 12};

let Three =  {name: 'Happy', class: 3, rollNo : 10 };

let Four =  {name: 'Mark', class: 9, rollNo : 9 };

let Five =  {name: 'Ben', class: 5, rollNo : 7 };

let Six =  {name: 'Toy', class: 8, rollNo : 6 };


let info = [One,Two,Three,Four,Five,Six];
console.log(info);
