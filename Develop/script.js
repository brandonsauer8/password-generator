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

//Ask user how many characters they want their password to be
var characters = prompt("How many characters do you want your password to contain?");

if (characters < 8 || characters > 128) {
  alert ("Password length must be between 8-128 characters");
  prompt("How many characters would you like your password to be?");
} else if (characters > 8 || characters < 128) {
  console.log (`I want ${characters} characters in my password`);
}

//Asks user if the want to use special characters
var specialCharacter = true;
var specialPrompt = confirm("Click OK if you would like to use special characters in your password.");

if (specialPrompt === specialCharacter) {
  console.log ("I would like special characters.");
} else {
  console.log ("I do NOT want to use special characters.");
}

//Ask user if they would like to use numeric characters
var numericCharacter = true;
var numericPrompt = confirm("Click OK to if you would like to use numeric characters in your password");

if (numericPrompt === numericCharacter) {
  console.log ("I want to use numeric characters.");
} else {
  console.log ("I do NOT want to use numeric characters");
}

//Ask user if they would like to use lower case characters

var lowerCase = true;
var lowerPrompt = confirm("Click OK if you would like to use lower case characters in your password");

if (lowerPrompt === lowerCase) {
  console.log ("I would like to use lowercase characters.");
} else {
  console.log ("I would NOT like to use lower case characters.");
}

//Ask user if they would like to use upper case characters
var upperCase = true;
var upperPrompt = ("Click OK if you would like to use upper case characters in your password.")

if (upperPrompt === upperCase) {
  console.log ("I would like to use uppercase characters.");
} else {
  console.log ("I would NOT like to use uppercase characters.");
}

//If none chosen, loop to ask the question again
alert("You must choose at least one option.")

console.log("I do NOT want numeric characters");