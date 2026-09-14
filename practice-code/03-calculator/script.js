let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval() string ko math equation ki tarah solve karta hai
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
    }
}