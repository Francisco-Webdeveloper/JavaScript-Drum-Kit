const keys = document.querySelectorAll('.key');

function removeTransition() {
    this.classList.remove('playing'); // restores the origin state of the keys
}

keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
});


function playAudioAndTriggerAnimation(event) {
    // selectors
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio && !key) return; // stops the function running 
    audio.currentTime = 0 // rewinds to start
    audio.play();

    key.classList.add('playing');
}

window.addEventListener('keydown', playAudioAndTriggerAnimation);