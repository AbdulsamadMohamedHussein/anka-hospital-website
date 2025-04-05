// Login Page Functionality
if (document.getElementById('loginForm')) {
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.querySelector('input[name="remember"]').checked;

        // Here you would typically validate credentials with your backend
        console.log('Login attempt:', { username, password, rememberMe });

        // For demo purposes, we'll redirect to the main page after "successful" login
        window.location.href = 'index.html';
    });

    // Request access link
    const requestAccessLink = document.getElementById('requestAccess');
    requestAccessLink.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('requestAccessModal');
    });

    // Access request form
    const accessRequestForm = document.getElementById('accessRequestForm');
    accessRequestForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const staffEmail = document.getElementById('staffEmail').value;
        const staffId = document.getElementById('staffId').value;
        const department = document.getElementById('department').value;

        // Here you would typically send this data to your admin/HR
        console.log('Access request:', { fullName, staffEmail, staffId, department });

        // Show confirmation and close modal
        alert('Your access request has been submitted. The admin team will contact you shortly.');
        closeModal('requestAccessModal');
        accessRequestForm.reset();
    });
}