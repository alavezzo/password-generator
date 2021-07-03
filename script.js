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
  
  var uppercase = prompt("Uppercase letters included? Enter 'Yes' or 'No'")
  uppercase = uppercase.toLowerCase();

  if (uppercase === 'yes') {
    return true;
  }

  else if (uppercase === 'no') {
    return false;
  }

  else {
    alert("You need to provide a valid answer! Please try again.");
    return getUppercase();
}
}

var getLowercase = function() {
  
  var lowercase = prompt("Lowercase letters included? Enter 'Yes' or 'No'")
  lowercase = lowercase.toLowerCase();

  if (lowercase === 'yes') {
    return true;
  }

  else if (lowercase === 'no') {
    return false;
  }

  else {
    alert("You need to provide a valid answer! Please try again.");
    return getLowercase();
}
}
// Write password to the #password input

function writePassword() {
  var length = getPasswordLength();
  var uppercase = getUppercase();
  console.log(uppercase);
  var lowercase = getLowercase();
  console.log(lowercase);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

