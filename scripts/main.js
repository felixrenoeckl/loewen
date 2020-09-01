var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/löwe.jpg') {
      myImage.setAttribute ('src','bilder/löwe2.jpg');
    } else {
      myImage.setAttribute ('src','bilder/löwe.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Löwen sind cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Löwen sind cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
