const register = document.querySelector('#register');
register.addEventListener('submit', (event) => {
    event.preventDefault();

    // Regular Expressions
    const nameReg = /^[A-Za-z. ]{3,30}$/;
    const mobileReg = /^[6789][0-9]{9}$/;
    //const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!$%&*?])[A-Za-z0-9@!$%&*?]{8,}$/;
    
    // Form Field Values
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
    const address = document.querySelector("#address").value;
    const city = document.querySelector("#city").value;
    const gender = document.querySelector("#register input[type='radio']:checked");
    const hobbies = document.querySelectorAll("#register input[type='checkbox']:checked");
    
    // Error Elements
    const name_error = document.querySelector("#name_error");
    const password_error = document.querySelector("#password_error");
    const email_error = document.querySelector("#email_error");
    const mobile_error = document.querySelector("#mobile_error");
    const address_error = document.querySelector("#address_error");
    const city_error = document.querySelector("#city_error");
    const gender_error = document.querySelector("#gender_error");
    const hobbies_error = document.querySelector("#hobbies_error");

    //if-else checks

    // Name
    if (!name) {
        name_error.innerHTML = "Please enter your name";
    } else if (!nameReg.test(name)) {
        name_error.innerHTML = "Invalid name. Only letters, spaces, and dots allowed (3-30 characters)";
    } else {
        name_error.innerHTML = "";
    }

    // Password
    if (!password) {
        password_error.innerHTML = "Please enter your password";
    } else if (!passwordReg.test(password)) {
        password_error.innerHTML = "Password must be at least 8 characters long, with uppercase, lowercase, number, and special character";
    } else {
        password_error.innerHTML = "";
    }

    // Email
    if (!email) {
        email_error.innerHTML = "Please enter your email";
    } else if (!emailReg.test(email)) {
        email_error.innerHTML = "Please enter a valid email address";
    } else {
        email_error.innerHTML = "";
    }

    // Mobile
    if (!mobile) {
        mobile_error.innerHTML = "Please enter your mobile number";
    } else if (!mobileReg.test(mobile)) {
        mobile_error.innerHTML = "Please enter a valid 10-digit mobile number starting with 6-9";
    } else {
        mobile_error.innerHTML = "";
    }

    // Address
    if (!address) {
        address_error.innerHTML = "Please enter your address";
    } else {
        address_error.innerHTML = "";
    }

    // City
    if (!city) {
        city_error.innerHTML = "Please enter your city";
    } else {
        city_error.innerHTML = "";
    }

    // Gender
    if (!gender) {
        gender_error.innerHTML = "<br> Please select your gender";
    } else {
        gender_error.innerHTML = "";
    }

    // Hobbies
    if (hobbies.length == 0) {
        hobbies_error.innerHTML = "<br> Please select hobby";
    } else {
        hobbies_error.innerHTML = "";
    }

});
