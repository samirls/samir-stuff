let element = document.getElementsByClassName ("font1");
let background = document.getElementById ("background");
let toggleStatus1 = "on";
let toggleStatus2 = "on";
let toggleStatus3 = "on";


function changeFont() {
    switch (toggleStatus1) {
    case "on":
        toggleStatus1 = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontFamily = 'caveat';
            }
        break;
    case "off":
        toggleStatus1 = "on";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontFamily = 'combo';
            }
        break;
    }
}

function changeColor() {
    switch (toggleStatus2) {
    case "on":
        toggleStatus2 = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.color = 'red';
            }
        break;
    case "off":
        toggleStatus2 = "on";
        for (i = 0; i < element.length; i++) {
            element[i].style.color = 'black';
            }
            break;
    }
    
}

function changeFontSize() {
    switch (toggleStatus3) {
    case "on":
        toggleStatus3 = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontSize = "130%";
            }
        break;
    case "off":
        toggleStatus3 = "on";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontSize = "100%";
            }
        break;
    }
}

function changeBackgroundColor() {
    background.classList.toggle('active')
}

function dontClick() {
    alert("Just don't click this, ok?")
}