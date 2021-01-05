function subtract() {
  
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let div = document.getElementById('result')
    div.innerHTML = sum(firstNumber,secondNumber)

    function sum (firstNumber,secondNumber){
        return Number(firstNumber) - Number(secondNumber);
    }


}