function solve() {
    let expression = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");
  
    document.querySelector(".keys").addEventListener("click", symbolClicked);
    document.querySelector(".clear").addEventListener("click", clear);
  
    function clear() {
      expression.textContent = "";
      result.textContent = "";
    }
  
    function symbolClicked(event) {
      let buttonPressed = event.target.value;
  
      switch (buttonPressed) {
        case "/":
        case "*":
        case "+":
        case "-": //9 * 2
          expression.textContent += ` ${buttonPressed} `;
          break;
        case "=":
          let [
            leftOperant,
            operator,
            rightOperant,
          ] = expression.textContent.split(" ");
  
          leftOperant = Number(leftOperant);
          rightOperant = Number(rightOperant);
  
          if (!rightOperant || !operator) {
            result.textContent = "NaN";
          } else {
            result.textContent = calculateResult(leftOperant,operator,rightOperant)
          }
  
          break;
  
        default:
          expression.textContent += buttonPressed;
      }
    }
  
    function calculateResult (leftOperant, operator, rightOperant) {
      switch (operator) {
          case "/":
            return leftOperant / rightOperant;
            
          case "*":
            return leftOperant * rightOperant;
            
          case "+":
            return leftOperant + rightOperant;
           
          case "-":
            return leftOperant - rightOperant;
            
        }
    }
  }
