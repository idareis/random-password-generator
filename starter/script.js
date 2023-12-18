// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

// Prompt for password length
var length = parseInt(prompt("Enter a password length between 8 and 128 characters:"));

// Validating the password length  
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  var specialChar = confirm("Would you like to include special characters?");
  var numericChar = confirm("Would you like to include numbers?");
  var lowercaseChar = confirm("Would you like to include lowercase characters?");
  var uppercaseChar = confirm("Would you like to include uppercase characters?");

if (!specialChar && !numericChar && !lowercaseChar && !uppercaseChar) {
  alert("Please select at least one character type.");
  return null;
  }

  return {
    length: length,
    specialChar: specialChar,
    numericChar: numericChar,
    lowercaseChar: lowercaseChar,
    uppercaseChar: uppercaseChar
  };

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
  }

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) return "";

  var availableCharacters = [];
  var guaranteedCharacters = [];

//Picking which characters types to get
  if (options.specialChar) {
    availableCharacters = availableCharacters.concat (specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.numericChar) {
    availableCharacters = availableCharacters.concat (numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.lowercaseChar) {
    availableCharacters = availableCharacters.concat (lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.uppercaseChar) {
    availableCharacters = availableCharacters.concat (upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  //To generate characters randomly
  var remainingLength = options.length - guaranteedCharacters.length;

  for (var i = 0; i < remainingLength; i++) {
    var randomChar = getRandom(availableCharacters);
    guaranteedCharacters.push(randomChar);
  }

  //To mix the character types
  for (var j = guaranteedCharacters.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var temp = guaranteedCharacters[j];
    guaranteedCharacters[j] = guaranteedCharacters[k];
    guaranteedCharacters[k] = temp;
  }

  //Generating the password in the box
  return guaranteedCharacters.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);