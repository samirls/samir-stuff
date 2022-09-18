let element = document.getElementsByClassName ("font1");
let background = document.getElementById ("background");
let toggleStatus = "on";


function changeFont() {
    switch (toggleStatus) {
    case "on":
        toggleStatus = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontFamily = 'caveat';
            }
        break;
    case "off":
        toggleStatus = "on";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontFamily = 'combo';
            }
        break;
    }
}

function changeColor() {
    switch (toggleStatus) {
    case "on":
        toggleStatus = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.color = 'red';
            }
        break;
    case "off":
        toggleStatus = "on";
        for (i = 0; i < element.length; i++) {
            element[i].style.color = 'black';
            }
            break;
    }
    
}

function changeFontSize() {
    switch (toggleStatus) {
    case "on":
        toggleStatus = "off";
        for (i = 0; i < element.length; i++) {
            element[i].style.fontSize = "130%";
            }
        break;
    case "off":
        toggleStatus = "on";
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