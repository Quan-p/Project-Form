/* eslint-disable no-alert */
const emailEl = document.getElementById('email');
const countryEl = document.getElementById('country');
const zipCodeEl = document.querySelector('#zip');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

const isRequired = (value) => (value !== '');

function emailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function zipValid(zipCode) {
    const re = new RegExp('^\\d+$');
    return re.test(zipCode);
}

function passwordValid(password) {
    const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    return re.test(password);
}

function showError(input, message) {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('span');
    error.textContent = message;
}

function showSuccess(input) {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('span');
    error.textContent = '';
}

const checkCountry = () => {
    let valid = false;
    const country = countryEl.value.trim();

    if (!isRequired(country)) {
        showError(countryEl, 'Country cannot be blank');
    } else {
        showSuccess(countryEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');
    } else if (!emailValid(email)) {
        showError(emailEl, 'Email is not valid');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkZip = () => {
    let valid = false;
    const zipCode = zipCodeEl.value.trim();

    if (!isRequired(zipCode)) {
        showError(zipCodeEl, 'Zip code cannot be blank');
    } else if (!zipValid(zipCode)) {
        showError(zipCodeEl, 'Zip code is not valid');
    } else {
        showSuccess(zipCodeEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank');
    } else if (!passwordValid(password)) {
        showError(passwordEl, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Passwords do not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail();
    const isCountryValid = checkCountry();
    const isZipCodeValid = checkZip();
    const isPasswordValid = checkPassword();
    const confirmPasswordValid = checkConfirmPassword();

    const isFormValid = isEmailValid
        && isCountryValid
        && isZipCodeValid
        && isPasswordValid
        && confirmPasswordValid;

    if (isFormValid) {
        alert('High Five!!!');
    }
});
