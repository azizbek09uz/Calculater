"use strict";  

const ac = document.getElementById("AC");  
const display = document.getElementById("display");  
const buttons = document.getElementsByClassName("append");  
let lastInput = ''; 
 
const operators = ['+', '-', '*', '/', '.'];  

function appendToDisplay(input) {  
    if (operators.includes(lastInput) && operators.includes(input)) {  
        return;
    }  
    display.value += input;  
    lastInput = input;
}  

for (let button of buttons) {  
    button.addEventListener("click", () => appendToDisplay(button.value));  
}  

function clearDisplay() {  
    ac.addEventListener("click", () => {  
        display.value = '';  
        lastInput = ''; 
    });  
}  

function deleteLast() {  
    display.value = display.value.slice(0, -1);  
    lastInput = display.value.charAt(display.value.length - 1) || ''; // Oxirgi kiritishni yangilash  
}  

function calculate() {  
    try {  
        const result = eval(display.value);  
        display.value = result;  
        lastInput = result.toString().slice(-1);
    } catch (error) {  
        display.value = 'Error';  
        display.style.color = 'red';  
    }  
} 
