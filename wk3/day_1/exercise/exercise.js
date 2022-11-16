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


