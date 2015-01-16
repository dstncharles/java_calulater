(function() {
  'use strict';

  var operation;

  
  function plusPressed(event){
    event.preventDefault();
    operation = '+';
    console.log('yes');
  }
  function minusPressed(event){
    event.preventDefault();
    operation = '-';
    console.log('pig');
  }
  function mutiplyPressed(event){
    event.preventDefault();
    operation = '*';
    console.log('pig');
  }
  function dividePressed(event){
    event.preventDefault();
    operation = '/';
    console.log('pig');
  }


  function numberPressed(number){
    console.log('clown');

    // Get the displayed number
    var displayedNumber = Number(document.getElementById('display').value);
    console.log('no');

    // Calculate the new number
    if(operation == '+') {
      displayedNumber = displayedNumber + number;
    } else if(operation == '-') {
      displayedNumber = displayedNumber - number;
    } else if(operation == '*') {
      displayedNumber = displayedNumber * number;
    } else if(operation == '/') {
      displayedNumber = displayedNumber / number;
    } else {
      displayedNumber = number;
      console.log('maybe');
    }

    // Display the new number
    document.getElementById('display').value = displayedNumber;
    console.log('fox');
  }

// //this is the pressed number
  function ninePressed(event) {
    event.preventDefault();
    numberPressed(Number(9));
    console.log('hound');
  }
  function eightPressed(event) {
    event.preventDefault();
    numberPressed(Number(8));
    console.log('round');
  }
  function sevenPressed(event) {
    event.preventDefault();
    numberPressed(Number(7));
    console.log('round');
  }
  function sixPressed(event) {
    event.preventDefault();
    numberPressed(Number(6));
    console.log('round');
  }
  function fivePressed(event) {
    event.preventDefault();
    numberPressed(Number(5));
    console.log('round');
  }
  function fourPressed(event) {
    event.preventDefault();
    numberPressed(Number(4));
    console.log('round');
  }
  function threePressed(event) {
    event.preventDefault();
    numberPressed(Number(3));
    console.log('round');
  }
  function twoPressed(event) {
    event.preventDefault();
    numberPressed(Number(2));
    console.log('round');
  }
  function onePressed(event) {
    event.preventDefault();
    numberPressed(Number(1));
    console.log('round');
  }
  function zeroPressed(event) {
    event.preventDefault();
    numberPressed(Number(0));
    console.log('round');
  }












// telling the computer to read the HTML and listen for a click

  document.getElementById('9').addEventListener('click', ninePressed);
  console.log('baby');
  document.getElementById('8').addEventListener('click', eightPressed);
  document.getElementById('7').addEventListener('click', sevenPressed);
  document.getElementById('6').addEventListener('click', sixPressed);
  document.getElementById('5').addEventListener('click', fivePressed);
  document.getElementById('4').addEventListener('click', fourPressed);
  document.getElementById('3').addEventListener('click', threePressed);
  document.getElementById('2').addEventListener('click', twoPressed);
  document.getElementById('1').addEventListener('click', onePressed);
  document.getElementById('0').addEventListener('click', onePressed);
  document.getElementById('+').addEventListener('click', plusPressed);
  document.getElementById('-').addEventListener('click', minusPressed);
  document.getElementById('*').addEventListener('click', mutiplyPressed);
  document.getElementById('divide').addEventListener('click', dividePressed);
})();
