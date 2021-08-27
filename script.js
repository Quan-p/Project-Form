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

if (lengthReq) {
    console.log('true');
} else {
    console.log('false');
}
