const buttons = document.querySelectorAll('.btn');
const text = document.querySelector('p');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
     text.innerText = text.innerText + button.innerText;
    });
});



