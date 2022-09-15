const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ( 'turnOff' );
const reset = document.getElementById ("reset");
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1;
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = "./img/desligada.jpg";
    }
    
}

function lampBreak () {
    lamp.src = "./img/quebrada.jpg";
}

function lampN () {
    lamp.src = "./img/desligada.jpg";
}


turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ("click", lampOff);
reset.addEventListener ("click", lampN)
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampBreak);
