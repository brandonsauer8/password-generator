// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = prompt("How many characters do you want your password to contain?");
if (characters < 8) {
  alert("Password length must be between 8-128 characters");
} if (characters > 128) {
  alert ("Password length must be between 8-128 characters");
} if (characters > 8) {
  console.log (`I want ${characters} characters in my password`);
}