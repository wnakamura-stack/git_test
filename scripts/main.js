//The code below interchanges two pictures with a click
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lebron-james.jpeg') {
      myImage.setAttribute ('src','images/lakerslogo.gif');
    } else {
      myImage.setAttribute ('src','images/lebron-james.jpeg');
    }
}

let myButton = document.querySelector('#buttonOne');
let myButton2 = document.querySelector('#clearUser')
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        console.error('User did not enter a name');
        setUserName();
    } else {
        if(myName === 'Jeff') { console.error('not a real person');}
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'The Lakers are cool #1, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let myName = localStorage.getItem('name');
  myHeading.textContent = 'The Lakers are cool, ' + myName;
}


myButton.onclick = function resetUser() {
    setUserName();
  }
myButton2.onclick = function clearUser() {
    localStorage.removeItem('name');
}

  console.error('my error message');

/*
Wesley tries to explain:
Line 13 (let myButton): defines a variable called myButton but I don’t know what document.querySelector does. I think querySelector is a function. "querySelector “finds” the HTML elements and yes, those variables hold those element “objects”."
Line 14 (let myButton2): same thing. Defines a variable called Mybutton2 which goes and finds clearUser in the html document
Line 15 (Let myHeading): does the same thing but it’s trying to locate h1
I guess those variables all point to the specific element that it finds somehow

Line 17 (function setUserName): we’re defining a new function called setUserName
Not sure why the parentheses are empty - Parentheses are empty because setUserName doesn't do anything with arguments (inputs)
Line 18 (let myName): establishing another variable named myName which initiates a prompt and returns whatever is entered into the prompt.
Line 19 (if(!myName)): I’m a little confused how the not (!) functions here. If I’m translating into English is it… “if myName has nothing in it?”
Answer - Kind of. if(!myName) is saying “if myName is empty, null or undefined” Then log a console.error User did not enter a name. And run the setUserName function again.
Line 2 (else): If there is a value fo myName then…
Line 23 and 24 (if(myName === 'Jeff')): see if the return from the variable myName is Jeff and return an error not a real person if so.  Also access run the function localStorage and it’s subjfunction setItem. Take whatever myName has returned and tag it as name so I can fetch it later if I need.
Line 25 (myHeading.innerHTML): I’m not sure here. Run innerHTML wherever you found the myHeading match and innerHTML replace that section with my string the lakers are cool, so and so from the prompt”
Line 29 and 30 (if(!localStorage.getItem('name')) {: If there’s nothing to be retrieved named name in local storage, then run the setUserName function
Line 32, 33 (let myName): Otherwise if there is something named name, bring that thing back.
*/