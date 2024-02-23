function addToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

  function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }

  function clearLastEntry() {
    display.value = display.value.slice(0, -1);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for keyboard input
    document.addEventListener("keydown", function (event) {
      const key = event.key;
      
      switch(key){
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            clearLastEntry();
            break;
        case 'Escape':
            clearDisplay();
            break;
        default:
            if (/^[0-9+*/.-]$/.test(key)) {
                addToDisplay(key);
              }
      }
    //   // Check for numeric keys and operators
    //   if (/^[0-9+*/.-]$/.test(key)) {
    //     addToDisplay(key);
    //   } else if (key === "Enter") {
    //     calculate();
    //   } else if (key === "Backspace") {
    //     clearLastEntry();
    //   } else if (key === "Escape") {
    //     clearDisplay();
    //   }
    });
});
