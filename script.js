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

var characterSets = {
  alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  
  numbers: ['0','1','2','3','4','5','6','7','8','9'],
  
  specialCharacters: [' ', '!','@','#','$','%','^','&','*','(',')','{','}','[',']','|',':',';',',','<','>','.','?','/','~','`','+','=','-','_']
  }

var characterSetsList = [characterSets.alphabet, characterSets.numbers, characterSets.specialCharacters];

var randomNumber = function(min, max) {
  var value = Math.floor((Math.random() * (max-min+1)) + min);

  return value;
}

var randomSet = function() {
  var max = characterSetsList.length - 1;
  return characterSetsList[randomNumber(0, max)];
}

var randomCharacter = function() {
  set = randomSet()
  setLength = set.length - 1
  return set[randomNumber(0,setLength)]
}

var ensureCharacterType = function() {
  alert('Please Confirm Character Types');
  characterTypes.getCharacterTypes();
  if (!characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      alert("At least one character type must be selected to proceed! Please try again.")
      characterTypes.getCharacterTypes();
  } 
}

var generatePassword = function(length) {
  for (i=0; i<length; i++) {
  }
}

// Write password to the #password input

function writePassword() {
  var length = getPasswordLength();
  length = parseInt(length);
  ensureCharacterType();
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

