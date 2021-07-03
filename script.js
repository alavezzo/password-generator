// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var getPasswordLength = function() {
  var length = prompt("Choose password length. Length must be a minimum 8 characters and a maximum of 128 characters");
  if (length < 8 || length > 128) {
    alert('Input invalid. Enter a valid length.');
    getPasswordLength();
  }
  else {
  console.log("Your chosen length is " + length);
  return length;
  }
}

var getUppercase = function() {
  
  var uppercase = confirm("Uppercase letters included? Select 'Ok' for yes.");
  if (uppercase) {
    return true;
  }
  return false;

}

var getLowercase = function() {
  
  var lowercase = confirm("Lowercase letters included? Select 'Ok' for yes.");

  if (lowercase) {
    return true;
  }

  else if (!lowercase) {
    return false;
  }
}

var getNumeric = function() {
  
  var numeric = confirm("Numeric Values included? Select 'Ok' for yes.");

  if (numeric) {
    return true;
  }

  else if (!numeric) {
    return false;
  }
}

var getSpecialCharacters = function() {
  
  var specialCharacters = confirm("Special Characters included? Select 'Ok' for yes.");

  if (specialCharacters) {
    return true;
  }

  else if (!specialCharacters) {
    return false;
  }
}

// Write password to the #password input

function writePassword() {
  var length = getPasswordLength();
  var uppercase = getUppercase();
  console.log(uppercase);
  var lowercase = getLowercase();
  console.log(lowercase);
  var numeric = getNumeric();
  console.log(numeric);
  var specialCharacters = getSpecialCharacters();
  console.log(specialCharacters);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

