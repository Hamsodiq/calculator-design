

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

 const acBtn = document.getElementById("ac");
 acBtn.addEventListener("click", (e) => {

    displayScreen.value = '';
    
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
