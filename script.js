const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailMessage = document.getElementById('emailMessage');
const emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', event => {
    event.preventDefault();

    if(emailInput.value === '') {
        emailMessage.textContent = 'Whoops! It looks like you forgot to add your email';
        emailMessage.style.visibility = 'visible';
        emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value) === false) {
        emailMessage.style.visibility = 'visible';
        emailMessage.textContent = 'Please provide a valid email address';
        emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    } else {
        emailMessage.style.visibility = 'visible';
        emailMessage.textContent = 'Subscribed';
        emailInput.style.border = '1px solid hsl(223, 100%, 88%)';
        emailInput.value = '';
    }
});