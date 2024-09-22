document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Invalid phone number format';
        valid = false;
    } else {
        phoneError.textContent = '';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and include a number and a special character';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});