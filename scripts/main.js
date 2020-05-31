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

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Thae Lakers are cool #1, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'The Lakers are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }