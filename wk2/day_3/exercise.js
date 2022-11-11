//  Write a JavaScript statement that selects the #meDom ID element.
let meDom = document.getElementById('meDom').innerText;
console.log("PingPong" , meDom );
//  Write at least 2 ways to select the #myFamily ul element.
const myFamily1 = document.getElementById('myFamily');
const myFamily2 = document.getElementsByTagName('ul');
console.log(myFamily1, myFamily2)
//  Write a JavaScript statement that selects Hans.
const Hans = document.getElementById('myBoo').nextElementSibling.innerText;
console.log(Hans);
// Write a JavaScript statement that selects the .rideOrDie class.
const rideOrDieClass = document.getElementsByClassName('rideOrDie')
console.log("Ride or Die", rideOrDieClass);
//  Bonus: Can you select Brian Oconner?
const Brian = document.getElementById('myBoo').nextElementSibling.nextElementSibling.innerText;

//  Bonus2: Can you console log Brian Oconner?
console.log("You a cop?", Brian)