var input = document.getElementById('input_round');
function round() {
    var number = input.value;
    var result = Math.round(number);
    document.getElementById('result').innerHTML = result;
}

function generateRandomInRange(min, max) {
    var randomNumber = Math.random();
    var scaledNumber = randomNumber * (max - min + 1);
    var randomInRange = Math.floor(scaledNumber) + min;
    return randomInRange;
  }
  
  var min = 1;
  var max = 10;
  var randomNumber = generateRandomInRange(min, max);
  document.getElementById('randomNumber').textContent = randomNumber;

  function convert(){
    var number = document.getElementById('input_number').value;
    var result = parseInt(number);
    var resulttwo = parseFloat(number);
    document.getElementById('input_number').innerHTML = result;
    document.getElementById('input_numbertwo').innerHTML = resulttwo;
  }
  
  function format(){
    var input_format = document.getElementById('input_format').value;
    var result_format = document.getElementById('result_format');
    if(isNaN(input_format)){
        result_format.innerHTML = "Please Enter a Number";
    }else{
        result_format.innerHTML = input_format.toFixed(2);
    }
}