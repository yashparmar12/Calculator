var display = document.querySelector(".screen");

function del() {
    var dele = display.value.slice(0, -1);
    display.value = dele;
}

function clin() {
    display.value = "";
}

function show(n) {
    display.value += n;
}

function cal() {
    display.value = eval(display.value);
}