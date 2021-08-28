const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

const isRequired = (value) => (value !== '');

const lengthReq = (length, min, max) => (!(length < min || length > max));

const emailValid = (email) => {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(email);
};

const passwordValid = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

function showError(input, message) {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('span');
    error.textContent = message;
}