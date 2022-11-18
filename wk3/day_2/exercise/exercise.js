// copy the completed HTML, CSS and JavaScript file into the files in this folder

// above the 3 pillar columns, create a hero image carousel!

// A hero image is a large image often at the top of the website.

// check out zola.com and see the carousel hero image!

// NOTE: yours only needs to be triggered by buttons.
// copy the completed HTML, CSS and JavaScript file into the files in this folder

// add buttons below the div A div B div C

// in each div, create a button with value change something
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');

// A.innerHTML = 'Red';
// B.innerHTML = 'Green';
// C.innerHTML = 'Yellow';

A.style.backgroundColor = 'red';
B.style.backgroundColor = 'green';
C.style.backgroundColor =  'yellow';

//////////////////
// homework for day 2 section below //
//////////////////

const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');

function ChangeA () {
    btnA.style = 'font-style: italic;'

};


function ChangeB () {
    btnB.style = 'font-weight: 900'
    
};


function ChangeC () {
    alert("youve clicked on C");
};


///////////////////////////////////////////////
// Homework for Day 3
///////////////////////////////////////////////
var position = 0;

function scrollPrev() {
  if (position < 5) {
    var slider = document.getElementById("imgSlider");
    position += 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
  // code here!
};



function scrollNext() {
  if (position > 0) {
    var slider = document.getElementById("imgSlider");
    position -= 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  };
  // code here!
};

function clickButton() {
    document.querySelector('#previous').click();
    if (position == 5){
        position
    }
};
setInterval(clickButton, 2000);

var fName = document.getElementById("fname");
var email = document.getElementById("email");

function createAlert () {
  var usernameInputValue = fName.value + " " + email.value;
  alert(usernameInputValue);
  usernameInputValue.value = '';

};
