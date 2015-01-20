(function() {
  'use strict';

  var operation;

  // //this is the pressed number
  function ninePressed(event) {
    event.preventDefault();
    numberPressed(Number(9));
  }
  function eightPressed(event) {
    event.preventDefault();
    numberPressed(Number(8));
  }
  function sevenPressed(event) {
    event.preventDefault();
    numberPressed(Number(7));
  }
  function sixPressed(event) {
    event.preventDefault();
    numberPressed(Number(6));
  }
  function fivePressed(event) {
    event.preventDefault();
    numberPressed(Number(5));
  }
  function fourPressed(event) {
    event.preventDefault();
    numberPressed(Number(4));
  }
  function threePressed(event) {
    event.preventDefault();
    numberPressed(Number(3));
  }
  function twoPressed(event) {
    event.preventDefault();
    numberPressed(Number(2));
  }
  function onePressed(event) {
    event.preventDefault();
    numberPressed(Number(1));
  }
  function zeroPressed(event) {
    event.preventDefault();
    numberPressed(Number(0));
  }

  function plusPressed(event){
    event.preventDefault();
    operation = '+';

  }
  function minusPressed(event){
    event.preventDefault();
    operation = '-';
  }
  function mutiplyPressed(event){
    event.preventDefault();
    operation = '*';
  }
  function dividePressed(event){
    event.preventDefault();
    operation = '/';
  }
  function clearPressed(event) {
    event.preventDefault();
    displayedNumber = number = 0;
    document.getElementById('display').value = Number;
  }


  function numberPressed(number){


    // Get the displayed number
    var displayedNumber = Number(document.getElementById('display').value);

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
      displayedNumber = displayedNumber + '' + number;
    }

    // Display the new number
    document.getElementById('display').value = displayedNumber * 1;
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
  document.getElementById('0').addEventListener('click', zeroPressed);
  document.getElementById('+').addEventListener('click', plusPressed);
  document.getElementById('-').addEventListener('click', minusPressed);
  document.getElementById('*').addEventListener('click', mutiplyPressed);
  document.getElementById('divide').addEventListener('click', dividePressed);
})();
