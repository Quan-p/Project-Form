const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

function validEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address';
    }
}

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        validEmail();
    }
});
