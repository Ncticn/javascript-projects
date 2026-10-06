const formSignUp = document.getElementById("form-newsletter-sign-up");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const inputEmail = document.getElementById("input-email");
    const isValid = isValidEmail(data.email);
    
    inputEmail.parentElement.classList.toggle("form-item-error", !isValid);
}

function isValidEmail(value){
    const userEmail = value.trim();
    return emailRegex.test(userEmail);
}

formSignUp.addEventListener("submit", handleSubmit);