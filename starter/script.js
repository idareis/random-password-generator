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
var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters."));
// Validating the password length  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return getPasswordOptions();
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
// Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
  }

// Function to generate password with user input
function generatePassword() {
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

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