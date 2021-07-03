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

var randomCharacter = function(set) {
  setLength = set.length -1;
  return set[randomNumber(0,setLength)];
}

var randomSetAll = function() {
  var max = setListAll.length - 1;
  return setListAll[randomNumber(0, max)];
}

var randomSetNoUpper = function() {
  var max = setListNoUpper.length - 1;
  return setListNoUpper[randomNumber(0, max)];
}
var randomSetNoLower = function() {
  var max = setListNoLower.length - 1;
  return setListNoLower[randomNumber(0, max)];
}
var randomSetNoNumeric = function() {
  var max = setListNoNumeric.length - 1;
  return setListNoNumeric[randomNumber(0, max)];
}
var randomSetNoSpecial = function() {
  var max = setListNoSpecial.length - 1;
  return setListNoSpecial[randomNumber(0, max)];
}

var randomSetUpperAndLower = function() {
  var max = setListUpperAndLower.length - 1;
  return setListUpperAndLower[randomNumber(0, max)];
}
var randomSetUpperAndNumeric = function() {
  var max = setListUpperAndNumeric.length - 1;
  return setListUpperAndNumeric[randomNumber(0, max)];
}
var randomSetUpperAndSpecial = function() {
  var max = setListUpperAndSpecial.length - 1;
  return setListUpperAndSpecial[randomNumber(0, max)];
}
var randomSetLowerAndNumeric = function() {
  var max = setListLowerAndNumeric.length - 1;
  return setListLowerAndNumeric[randomNumber(0, max)];
}
var randomSetLowerAndSpecial = function() {
  var max = setListLowerAndSpecial.length - 1;
  return setListLowerAndSpecial[randomNumber(0, max)];
}
var randomSetNumericAndSpecial = function() {
  var max = setListNumericAndSpecial.length - 1;
  return setListNumericAndSpecial[randomNumber(0, max)];
}

var randomCharacterAll = function() {
  set = randomSetAll();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterNoUppercase = function() {
  set = randomSetNoUpper();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterNoLowercase = function() {
  set = randomSetNoLower();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterNoNumeric = function(){
  set = randomSetNoNumeric();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterNoSpecial = function(){
  set = randomSetNoSpecial();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterUpperAndLower = function() {
  set = randomSetUpperAndLower();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterUpperAndNumeric = function() {
  set = randomSetUpperAndNumeric();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterUpperAndSpecial = function(){
  set = randomSetUpperAndSpecial();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterLowerAndNumeric = function(){
  set = randomSetLowerAndNumeric();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterLowerAndSpecial= function(){
  set = randomSetLowerAndSpecial();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}

var randomCharacterNumericAndSpecial = function(){
  set = randomSetNumericAndSpecial();
  setLength = set.length - 1
  return set[randomNumber(0, setLength)]
}


var generatePassword = function(length) {
  password = ''

  for (i=0;i<length;i++) {
    if (characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      var uppercaseLetter = randomCharacter(characterSets.alphabet).toUpperCase();
      password = password + uppercaseLetter;
    }

    else if (!characterTypes.uppercase && characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      var lowercaseLetter = randomCharacter(characterSets.alphabet);
      password = password + lowercaseLetter;
    }

    else if (!characterTypes.uppercase && !characterTypes.lowercase && characterTypes.numeric && !characterTypes.specialCharacters) {
      var numericCharacter = randomCharacter(characterSets.numbers);
      password = password + numericCharacter;
    }

    else if (!characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && characterTypes.specialCharacters) {
      var specialCharacter = randomCharacter(characterSets.specialCharacters);
      password = password + specialCharacter;
    }
    
    else if (!characterTypes.uppercase && characterTypes.lowercase && characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterNoUppercase();
      var randomCharacterNoUppercase = random.characterNoUppercase;
      password = password + randomCharacterNoUppercase;
    }

    else if (characterTypes.uppercase && !characterTypes.lowercase && characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterNoLowercase();
      var randomCharacterNoLowercase = random.characterNoLowercase;
      password = password + randomCharacterNoLowercase;
    }

    else if (characterTypes.uppercase && characterTypes.lowercase && !characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterNoNumeric();
      var randomCharacterNoNumeric = random.characterNoNumeric;
      password = password + randomCharacterNoNumeric;
    }

    else if (characterTypes.uppercase && characterTypes.lowercase && characterTypes.numeric && !characterTypes.specialCharacters) {
      random.getRandomCharacterNoSpecial();
      var randomCharacterNoSpecial = random.characterNoSpecial;
      password = password + randomCharacterNoSpecial;
    }

    else if (characterTypes.uppercase && characterTypes.lowercase && !characterTypes.numeric && !characterTypes.specialCharacters) {
      random.getRandomCharacterUpperAndLower();
      var randomCharacterUpperAndLower = random.characterUpperAndLower;
      password = password + randomCharacterUpperAndLower;
    }

    else if (characterTypes.uppercase && !characterTypes.lowercase && characterTypes.numeric && !characterTypes.specialCharacters) {
      random.getRandomCharacterUpperAndNumeric();
      var randomCharacterUpperAndNumeric = random.characterUpperAndNumeric;
      password = password + randomCharacterUpperAndNumeric;
    }

    else if (characterTypes.uppercase && !characterTypes.lowercase && !characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterUpperAndSpecial();
      var randomCharacterUpperAndSpecial = random.characterUpperAndSpecial;
      password = password + randomCharacterUpperAndSpecial;
    }

    else if (!characterTypes.uppercase && characterTypes.lowercase && characterTypes.numeric && !characterTypes.specialCharacters) {
      random.getRandomCharacterLowerAndNumeric();
      var randomCharacterLowerAndNumeric = random.characterLowerAndNumeric;
      password = password + randomCharacterLowerAndNumeric;
    }

    else if (!characterTypes.uppercase && characterTypes.lowercase && !characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterLowerAndSpecial();
      var randomCharacterLowerAndSpecial = random.characterLowerAndSpecial;
      password = password + randomCharacterLowerAndSpecial;
    }

    else if (!characterTypes.uppercase && !characterTypes.lowercase && characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterNumericAndSpecial();
      var randomCharacterNumericAndSpecial = random.characterNumericAndSpecial;
      password = password + randomCharacterNumericAndSpecial;
    }
    else if (characterTypes.uppercase && characterTypes.lowercase && characterTypes.numeric && characterTypes.specialCharacters) {
      random.getRandomCharacterAll();
      var randomCharacterAll = random.characterAll;
      password = password + randomCharacterAll;
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
  
  specialCharacters: [' ', '!','@','#','$','%','^','&','*','(',')','{','}','[',']','|',':',';',',','<','>','.','?','/','~','`','+','=','-','_'],

  uppercaseAlphabet: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
}

var random = {
  characterAll: '',
  characterNoUppercase: '',
  characterNoLowercase: '',
  characterNoNumeric: '',
  characterNoSpecial: '',
  characterUpperAndLower: '',
  characterUpperAndNumeric: '',
  characterUpperAndSpecial: '',
  characterLowerAndNumeric: '',
  characterLowerAndSpecial: '',
  characterNumericAndSpecial: '',
  getRandomCharacterAll: function(){
    this.characterAll = randomCharacterAll();
  },
  getRandomCharacterNoUppercase: function(){
    this.characterNoUppercase = randomCharacterNoUppercase();
  },
  getRandomCharacterNoLowercase: function(){
    this.characterNoLowercase = randomCharacterNoLowercase();
    },
  getRandomCharacterNoNumeric: function(){
    this.characterNoNumeric = randomCharacterNoNumeric();
  },
  getRandomCharacterNoSpecial: function(){
    this.characterNoSpecial = randomCharacterNoSpecial();
  },
  getRandomCharacterUpperAndLower: function(){
    this.characterUpperAndLower = randomCharacterUpperAndLower();
  },
  getRandomCharacterUpperAndNumeric: function(){
    this.characterUpperAndNumeric = randomCharacterUpperAndNumeric();
  },
  getRandomCharacterUpperAndSpecial: function(){
    this.characterUpperAndSpecial = randomCharacterUpperAndSpecial();
  },
  getRandomCharacterLowerAndNumeric: function(){
    this.characterLowerAndNumeric = randomCharacterLowerAndNumeric();
    },
  getRandomCharacterLowerAndSpecial: function(){
    this.characterLowerAndSpecial = randomCharacterLowerAndSpecial();
  },
  getRandomCharacterNumericAndSpecial: function(){
    this.characterNumericAndSpecial = randomCharacterNumericAndSpecial();
  }
}

var setListAll = [characterSets.alphabet, characterSets.uppercaseAlphabet, characterSets.numbers, characterSets.specialCharacters]
var setListNoUpper = [characterSets.alphabet, characterSets.numbers, characterSets.specialCharacters];
var setListNoLower = [characterSets.uppercaseAlphabet, characterSets.numbers, characterSets.specialCharacters]
var setListNoNumeric =[characterSets.alphabet, characterSets.uppercaseAlphabet, characterSets.specialCharacters]
var setListNoSpecial = [characterSets.alphabet, characterSets.uppercaseAlphabet, characterSets.numbers]
var setListUpperAndLower = [characterSets.uppercaseAlphabet, characterSets.alphabet];
var setListUpperAndNumeric = [characterSets.uppercaseAlphabet, characterSets.numbers];
var setListUpperAndSpecial =[characterSets.uppercaseAlphabet, characterSets.specialCharacters];
var setListLowerAndNumeric = [characterSets.alphabet, characterSets.numbers];
var setListLowerAndSpecial =[characterSets.alphabet, characterSets.specialCharacters];
var setListNumericAndSpecial = [characterSets.specialCharacters, characterSets.numbers];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

