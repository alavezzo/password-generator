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


var characterTypes = {
  uppercase: '',
  lowercase: '',
  numeric: '',
  specialCharacters: '',
getCharacterTypes: function(){
  this.uppercase = getUppercase(),
  this.lowercase = getLowercase(),
  this.numeric = getNumeric(),
  this.specialCharacters = getSpecialCharacters()
}
}

  
  

// Write password to the #password input

function writePassword() {
  var length = getPasswordLength();
  alert('Please Confirm Character Types');
  characterTypes.getCharacterTypes();
  if (!characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      alert("At least one character type must be selected to proceed! Please try again.")
  } 

  console.log(characterTypes.uppercase);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

