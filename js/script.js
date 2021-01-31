let display = document.getElementById("display");

function clear1() {
    display.value = "";
}
function res() {
    display.value = eval(display.value);
}
function press(x) {
    display.value += x;
}