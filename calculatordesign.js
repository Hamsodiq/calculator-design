

const displayScreen = document.getElementById("display");

let beforeOperationValue = 0;
let afterOperationValue = 0;

const btns = document.querySelectorAll('.btn'); //
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if(beforeOperationValue != 0){
            afterOperationValue += btn.value;
        }
        displayScreen.value += btn.value;

        e.preventDefault();
    })
});


const operatorsBtn = document.querySelectorAll('.operatorBtn'); //
operatorsBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
         if(beforeOperationValue == 0){
             beforeOperationValue = parseInt(displayScreen.value);
         }
        displayScreen.value += operator.value;
    })
});

const equalToBtn = document.getElementById("equalTo");
 equalToBtn.addEventListener("click", (e) => {
      if(displayScreen.value != ""){
           displayScreen.value =  beforeOperationValue + parseInt(afterOperationValue);
      }
 })

