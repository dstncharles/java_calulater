// function numberPressed(number){
//   var displayedNumber = Number(document.getElementById('display').textContent);
//
//   if(operation == '+') {
//     displayedNumber = displayedNumber + number;
//   } else if(operation == '-') {
//
//   } else {
//     displayedNumber = number;
//   }
// function numberPressed(){
//   return 9
//   document.getElementById("display").textContent = '9';
// };
//
//
//
//
//
// // var readOut=document.getElementById('8').textContent;
// // console.log(readOut);
//
// document.getElementById("8").onClick = numberPressed;
//


(function() {
  'use strict';

  function ninePressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '9';
    console.log('yes');
  }
  function eightPressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '8';
    console.log('yes');
  }
  function sevenPressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '7';
    console.log('yes');
  }
  function sixPressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '6';
    console.log('yes');
  }
  function fivePressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '5';
    console.log('yes');
  }
  function fourPressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '4';
    console.log('yes');
  }
  function threePressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '3';
    console.log('yes');
  }
  function twoPressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '2';
    console.log('yes');
  }
  function onePressed(event) {
    event.preventDefault();
    document.getElementById('display').value = '1';
    console.log('yes');
  }
// telling the computer to read the HTML and listen for a click

  document.getElementById('9').addEventListener('click', ninePressed);
  document.getElementById('8').addEventListener('click', eightPressed);
  document.getElementById('7').addEventListener('click', sevenPressed);
  document.getElementById('6').addEventListener('click', sixPressed);
  document.getElementById('5').addEventListener('click', fivePressed);
  document.getElementById('4').addEventListener('click', fourPressed);
  document.getElementById('3').addEventListener('click', threePressed);
  document.getElementById('2').addEventListener('click', twoPressed);
  document.getElementById('1').addEventListener('click', onePressed);



})();
