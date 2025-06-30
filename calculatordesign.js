

const displayScreen = document.getElementById("display");

let beforeOperationValue = 0;
let afterOperationValue = 0;
let clickedOperator;

//Append onClickListener to all number button
const btns = document.querySelectorAll('.btn'); //
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // if(beforeOperationValue != 0){
        //     afterOperationValue += btn.value;
        // }
        displayScreen.value += btn.value;
        e.preventDefault();
    })
});

// const plusBtn = document.getElementById('plusBtn');
// plusBtn.addEventListener('click', (e) => {
//     // check if our display is empty
//     if(displayScreen.value.length !=0){
//         beforeOperationValue = parseInt(displayScreen.value);
//         displayScreen.value = '';
//     }
// });

// add a listener to our
const operatorsBtn = document.querySelectorAll('.operatorBtn'); //
operatorsBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if(displayScreen.value != "" ){
            clickedOperator = operator.value;
            operationHandler();
            displayScreen.value = '';
        }
    })
});

function operationHandler() {
    if(clickedOperator == '+'){
        beforeOperationValue = beforeOperationValue + parseInt(displayScreen.value);
        displayScreen.value =  beforeOperationValue;
    } else if(clickedOperator == '-'){
        beforeOperationValue = beforeOperationValue - parseInt(displayScreen.value);
        displayScreen.value =  beforeOperationValue;
    } else if(clickedOperator == '*'){
        beforeOperationValue = beforeOperationValue * parseInt(displayScreen.value);
        displayScreen.value =  beforeOperationValue;
    } else if(clickedOperator == '/'){
        beforeOperationValue = beforeOperationValue / parseInt(displayScreen.value);
        displayScreen.value =  beforeOperationValue;
    }else {
        displayScreen.value = beforeOperationValue;
    }
}


const equalToBtn = document.getElementById("equalTo");
 equalToBtn.addEventListener("click", (e) => {
      if(displayScreen.value != ""){
          operationHandler();
      }
 });




 const acBtn = document.getElementById("ac");
 acBtn.addEventListener("click", (e) => {
    displayScreen.value = '';
    beforeOperationValue = 0;
 })

 const delBtn = document.getElementById("del");
 delBtn.addEventListener("click", (e) => {

    displayScreen.value =  displayScreen.value.slice(0, -1);
    
    
 })

 
// const delButton = document.getElementById('del');
// delButton.addEventListener('click', () => {
//     document.getElementById('display') = display.value.slice(0, -1); 
// });

// function myFunction()
//     {
//         document.getElementById("display").value = (document.getElementById("display").value.getLength) - 1;
//     }
