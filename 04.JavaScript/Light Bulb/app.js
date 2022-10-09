let bulb = document.querySelector('#bulb');
let btn1 = document.querySelector('#on-btn');
let btn2 = document.querySelector('#off-btn');
let message = document.querySelector('.alert-message');

btn1.addEventListener('click', function () {
    bulb.style.color = '#FFFF00';
    message.style.display = 'block';
    message.innerText = 'The bulb is now turned ON!';
})

btn2.addEventListener('click', function () {
    bulb.style.color = '#000';
    message.style.display = 'block';
    message.innerText = 'The bulb is now turned OFF!';
})

// The live demo can be found here: 
// https://noobchirag69.github.io/Vanilla_Bulb/