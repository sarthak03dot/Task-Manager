function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    let isValid = true;

    const namePattern = /^[a-zA-Z\s]+$/;
    if(name === "") {
        nameError.innerHTML = "Name is required.";
        isValid = false;
    }else if(!namePattern.test(name)) {
        nameError.innerHTML = "Name must only contain letters and spaces.";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    if(email === "") {
        emailError.innerHTML = "Email is required.";
        isValid = false;
    }
    else if(!emailPattern.test(email)) {
        emailError.innerHTML = "Enter a valid email address.";
        isValid = false;
    }
    if(message === "" ) {
        messageError.innerHTML = "Message is required.";
        isValid = false;
    }
    return isValid;
}