var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userClick;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", "@"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    alert("Needs a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);

  } else { 
    confirmLower = confirm("Do you want lower case characters in your password?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Do you want to use upper case characters in your password?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Do you want to use numbers in your password?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Do you want to use special characters in your password?");
    console.log("Special Character " + confirmSpecial);

  };

  // If the user clicks cancel 4 times
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userClick = alert("You must choose an option");
  // If user clicks OK 4 times.
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userClick = lowerCase.concat(upperCase, numbers, special);
    console.log(userClick);
  }
  // If user clicks OK 3 times
  else if (confirmLower && confirmUpper && confirmNumber) {
    userClick = lowerCase.concat(upperCase, numbers);
    console.log(userClick);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userClick = lowerCase.concat(upperCase, special);
    console.log(userClick);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userClick = lowerCase.concat(numbers, special);
    console.log(userClick);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userClick = upperCase.concat(numbers, special);
    console.log(userClick);
  }
  // If user clicks OK 2 times
  else if (confirmLower && confirmUpper) {
    userClick = lowerCase.concat(upperCase);
    console.log(userClick);
  }
  else if (confirmLower && confirmNumber) {
    userClick = lowerCase.concat(numbers);
    console.log(userClick);
  }
  else if (confirmLower && confirmSpecial) {
    userClick = lowerCase.concat(special);
    console.log(userClick);
  }
  else if (confirmUpper && confirmNumber) {
    userClick = upperCase.concat(numbers);
    console.log(userClick);
  }
  else if (confirmUpper && confirmSpecial) {
    userClick = upperCase.concat(special);
    console.log(userClick);
  }
  else if (confirmNumber && confirmSpecial) {
    userClick = numbers.concat(special);
    console.log(userClick);
  }
  // If user clicks OK only 1 time
  else if (confirmLower) {
    userClick = lowerCase;
    console.log(userClick);
  }
  else if (confirmUpper) {
    userClick = blankUpper.concat(upperCase);
    console.log(userClick);
  }
  else if (confirmNumber) {
    userClick = numbers;
    console.log(userClick);
  }
  else if (confirmSpecial) {
    userClick = special;
    console.log(userClick);
  };

  //an empty variable for the password length. 
  var passwordBlank = [];

  // Creates a random selection
  for (var i = 0; i < passwordLength; i++) {
    var allClicks = userClick[Math.floor(Math.random() * userClick.length)];
    passwordBlank.push(allClicks);
    console.log(allClicks);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;

}