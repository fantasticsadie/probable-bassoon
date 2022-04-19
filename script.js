newFunction();

document.getElementById(id).onclick('clck'):  generateBtn();
const generateBtn = newFunction();

let lowerCase = "abcdefghijklmnopqrstuvwxyz";

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numChars = "0123456789";

const specialChars = "∞§!ª≠\«~ƒ÷¬%$_+‡&˝¯^(),¿";

const generate = () => {
    const password = "";
    const passwordChars = "";

    var passwordLength = prompt("How long would you like the password to be? It must be between 8-128 charachters long.");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        window.console.error("Invalid password, must be between 8-128 charachters long.");
        return;

    }
    var lwrCaseChoices = confirm("Do you want some lower case letters in your password?");

    if (lowerCaseChoices) {
        passwordChars += lowerCase;
    }
    var upperCaseChoices = confirm("Do you want some upper case letters in your password?");

    if (!upperCaseChoices) {
        debugger;
    } else {
        passwordChars += upperCase;
    }

    let passwordTextArea;
    passwordTextArea = document.getElementById("password");
};
function newFunction() {
    prompt; window.console = ("hello!");
}

function newFunction() {
    return document.querySelector('generate');
}

addevent(document.addEventListener clickEvent, function()