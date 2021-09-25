const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#id_password1');

const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#id_password2');


togglePassword.addEventListener('click', function (x) {
// toggle the type attribute
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
// toggle the eye slash icon
this.classList.toggle('fa-eye-slash');
});
 
togglePassword1.addEventListener('click', function (y) {
// toggle the type attribute
const type = password1.getAttribute('type') === 'password' ? 'text' : 'psswrd1';
password1.setAttribute('type', type);
// toggle the eye slash icon
this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function (z) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'psswrd2' ? 'text' : 'psswrd2';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});