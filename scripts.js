//The following lines of code up to 56 are for the log in.
const nameLabel = document.getElementById("nameLabel");
const passwordLabel = document.getElementById("passwordLabel");
const name = document.getElementById("Name");
const password = document.getElementById("Password");
const error = document.getElementById("errorContainer");
const form = document.getElementById("Form");
const input = document.querySelectorAll("input");


//This function checks the input information before submitting the data
form.addEventListener("submit", function checkInformation(ev) {
    //The below clearColor function resets the border/label colours when a form is resubmitted 
    clearColor();

    let messages = [];

    //The below code checks the name / password and changes the colour and pushes an error message.
    if (name.value === "" || name.value === null) {
        messages.push("*You must not leave the name field empty.");
        name.style.borderColor = "red";
        nameLabel.style.color = "red";
    } 
    
    if (password.value === "" || password.value === null){
        messages.push("You must enter a password.");
        password.style.borderColor = "red";
        passwordLabel.style.color = "red";
    }

    if (password.value.length <= 7 || password.value.length >= 21) {
        messages.push("Your password must be between 8 and 20 characters.")
        password.style.borderColor = "red";
        passwordLabel.style.color = "red";
    }

    //This stops the submission happening if the messages array contains an error message for the user and will get them to re-try.
    if (messages.length > 0) {
        ev.preventDefault();
        error.innerText = messages.join("\n\n *");
    }
})

//This clears the text and styles when a user hits the clear fields button. The reason I seperate the clearColor and clearErrorMessage is so that if I call the clearColor (like at the start of the form), it does not wipe the text for resubmissions.
form.addEventListener("reset", function clearErrorMessage() {
    clearColor();
})

//This removes the various colours and error messages.
function clearColor(){
    name.style.borderColor = "";
    nameLabel.style.color = "";
    password.style.borderColor = "";
    passwordLabel.style.color = "";
    error.innerText = "";
}