
const generateBtn = newFunction();

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numChars = "0123456789";

const specialChars = "∞§!ª≠\«~ƒ÷¬%$_+‡&˝¯^(),¿";

function generate() {
    const passwordChars = "";

    var passwordLength = prompt("How long would you like the password to be? It must be between 8-128 charachters long.");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        window.console.error("Invalid password, must be between 8-128 charachters long.");
        return;

    }
    var lwrCaseChoices = function confirm() { };

    if (lowerCaseChoices) {
        passwordChars += lowerCase;
    }
    var upperCaseChoices = confirm("Do you want some upper case letters in your password?");

    if (!upperCaseChoices) {

    } else {
        passwordChars += upperCase;
    }

    let passwordTextArea;
    passwordTextArea = document.getElementById("password");
}
function newFunction() {
    prompt; window.console = ("hello!");
}

function newFunction() {
    return document.querySelector('generate');
}
// Use the correct selector `#` to select a button by its ID and not class
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

passwordBtnElon('click','generate',function() {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
