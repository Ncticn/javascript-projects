const newsletterForm = document.getElementById("newsletterForm");
const inputEmail = document.getElementById("inputEmail");
const successEmailLink = document.getElementById("successEmail");
const successTitle = document.getElementById("successTitle");
const buttonReset = document.getElementById("buttonClear");


newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = inputEmail.value;
    const isValid = emailRegex.test(email.trim());

    inputEmail.setAttribute("aria-invalid", String(!isValid));

    if (isValid) {
        document.querySelector('[data-state="form"]').hidden = true;
        document.querySelector('[data-state="success"]').hidden = false;

        successEmailLink.href = `mailto:${email}`;
        successEmailLink.lastChild.textContent = email;

        // Move focus to the success heading so keyboard and screen reader users land on the confirmation
        successTitle.focus();

    } else {
        inputEmail.parentElement.classList.add("is-error");
    }
});



buttonReset.addEventListener("click", function () {
    document.querySelector('[data-state="form"]').hidden = false;
    document.querySelector('[data-state="success"]').hidden = true;
    inputEmail.parentElement.classList.remove("is-error");
    inputEmail.setAttribute("aria-invalid", "false");
    inputEmail.value = "";

    // Return focus to the email field so the user can continue from where they left off
    inputEmail.focus();
});
