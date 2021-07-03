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

var ensureCharacterType = function() {
  alert('Please Confirm Character Types');
  characterTypes.getCharacterTypes();
  if (!characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      alert("At least one character type must be selected to proceed! Please try again.")
      characterTypes.getCharacterTypes();
  } 
}

var randomNumber = function(min, max) {
  var value = Math.floor((Math.random() * (max-min+1)) + min);
  return value;
}

var randomSet = function() {
  var max = characterSetsList.length - 1;
  return characterSetsList[randomNumber(0, max)];
}

var randomCharacter = function(set) {
  setLength = set.length -1;
  return set[randomNumber(0,setLength)];
}

var randomSetAndCharacter = function() {
  set = randomSet();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var generatePassword = function(length) {
  password = ''

  for (i=0;i<length;i++) {
    if (characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      uppercaseLetter = randomCharacter(characterSets.alphabet).toUpperCase();
      password = password + uppercaseLetter;
    }
    else if (!characterTypes.uppercase && characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      lowercaseLetter = randomCharacter(characterSets.alphabet);
      password = password + lowercaseLetter;
    }
    else if (!characterTypes.uppercase && !characterTypes.lowercase && characterTypes.numeric && !characterTypes.specialCharacters) {
      numericCharacter = randomCharacter(characterSets.numbers);
      password = password + numericCharacter;
    }
    else if (!characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && characterTypes.specialCharacters) {
      specialCharacter = randomCharacter(characterSets.specialCharacters);
      password = password + specialCharacter;
    }
    else if (characterTypes.uppercase && characterTypes.lowercase && characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomSetAndCharacter();
      console.log(random.setAndCharacter);
    }

  }
  return password
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

// Objects
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

var random = {
  set: '',
  setAndCharacter: '',
  getRandomSet: function(){
  this.set = randomSet()
  },
  getRandomSetAndCharacter: function(){
    this.setAndCharacter = randomSetAndCharacter()
  }
}

var characterSetsList = [characterSets.alphabet, characterSets.numbers, characterSets.specialCharacters]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

