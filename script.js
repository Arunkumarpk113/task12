document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function (event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            event.preventDefault(); // Prevent form submission if passwords don't match
        }
    });
});
