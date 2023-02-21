'use strict';
var soundPlaying;

function removeTransition(element){
    element.classList.remove('js-playing');
    clearInterval(soundPlaying);
    soundPlaying = null;
}

function addRemoveClass(element){
    element.classList.toggle('js-playing');
    soundPlaying = setInterval( function() { removeTransition(element); }, 10000 );
}

function sound(event){
    if(soundPlaying === null || soundPlaying === undefined) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        if(!audio) return
        audio.currentTime = 0;
        audio.play();
        addRemoveClass(key);
    }
}

window.addEventListener('keydown', sound);
