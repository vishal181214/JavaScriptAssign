
// Q1. Write the code to access element which is having id as "text" 

const element = document.getElementById("text");
console.log(element.innerText);


// Q2. Write the code to access element which is having tag as "h1"

const element1 = document.getElementsByTagName("h1");
console.log(element1[0].innerText);



// Q3. Write the code to access element which is having class as "box"

const element2 = document.getElementsByClassName("box");
console.log(element2[0].innerText);


// Q4. "<h1>Hello </h1> Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

const element3 = document.getElementById("change");
element3.innerHTML = "Hello World!"



// Q5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function change(){
    const element = document.getElementsByClassName("boxOne");
    const element1 = document.getElementsByClassName("subbox");
    element[0].style.display = "flex";
    element[0].style.flexDirection = "column";
    element[0].style.padding = "5%";
    element1[0].style.marginLeft = "auto";
    element1[0].style.marginRight ="auto";
    element1[0].style.backgroundColor = "white";
    element1[0].style.width = "80%";
    element1[0].style.border = "2px solid black";
    element1[0].style.borderRadius = "5%";
    element1[1].style.marginLeft = "auto";
    element1[1].style.marginRight ="auto";
    element1[1].style.marginTop = "3%";
    element1[1].style.backgroundColor = "white";
    element1[1].style.width = "80%";
    element1[1].style.border = "2px solid black";
    element1[1].style.borderRadius = "5%";
    element1[2].style.marginLeft = "auto";
    element1[2].style.marginRight ="auto";
    element1[2].style.marginTop = "3%";
    element1[2].style.backgroundColor = "white";
    element1[2].style.width = "80%";
    element1[2].style.border = "2px solid black";
    element1[2].style.borderRadius = "5%";
}


// Q6. What’s the difference between window vs document?

// Document Object: The document object represent a web page that is loaded in the browser. By accessing the document object, 
//                  we can access the element in the HTML page. With the help of document objects, we can add dynamic content 
//                  to our web page. The document object can be accessed with a window.document or just document.
            
//             Syntax:
//                     document.method_name;

// Window Object: The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that 
//                displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the 
//                document, the window object is created. 

//             Syntax:
//                     window.property_name;


// Q7. "<h1>Hello </h1> Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" 
// in the above given h1 tag using DOM functions"

const element4 = document.getElementById("heading");
element4.style.color = "red";
element4.style.fontSize = "40px";

// Q8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replaceText() {
    const element5 = document.getElementById("replace");
    element5.innerHTML = '"Welcome to Elevation academy"';  
}

// Q9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

setInterval(showTime, 1000);
		function showTime() {
			let time = new Date();
			let hour = time.getHours();
			let min = time.getMinutes();
			let sec = time.getSeconds();
			am_pm = "AM";

			if (hour > 12) {
				hour -= 12;
				am_pm = "PM";
			}
			if (hour == 0) {
				hr = 12;
				am_pm = "AM";
			}

			hour = hour < 10 ? "0" + hour : hour;
			min = min < 10 ? "0" + min : min;
			sec = sec < 10 ? "0" + sec : sec;

			let currentTime = hour + ":"
				+ min + ":" + sec + am_pm;

			document.getElementById("clock").innerHTML = currentTime;
		}

showTime();

// Q10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function setOption(){
    var select = document.getElementById("year");
    const option = select.options[select.selectedIndex];
    document.getElementById("yearText").value = option.text;
    document.querySelector('.textToy').textContent = option.innerText;
} 


//Q11. "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

function validate()
{
 const phone = document.getElementById("cell").value;
 const test = document.getElementById("appendText");
 const code = phone.slice(0,3);
 if(code === "+91")
 {
     console.log("inside first if")
     if(((phone.length - 3) === 10))
        console.log("Sucessfull!");
     else
         alert("Invalid! Mobile number should be 10 digit");    
 }
 else
 {
     if(((phone.length - 3) != 10))
         alert("Invalid! Enter valid number.");
     else
         alert("Invalid! Enter the country code");
 }

 const email = document.getElementById('email');
 const defaultEmail = '@prepbytes.com';
 email.value = defaultEmail;
 }
 