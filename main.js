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
function numberPressed(){
  return 9
  document.getElementById("display").textContent = '9';
};





// var readOut=document.getElementById('8').textContent;
// console.log(readOut);

document.getElementById("8").onClick = numberPressed;
