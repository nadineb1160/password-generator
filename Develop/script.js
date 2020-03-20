// Assignment Code
var generateBtn = document.querySelector("#generate");
// Copy button 
var copyBtn = document.querySelector("#copy");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);


// Copy password to clipboard
function copyPassword() {
  var passwordCopy = document.getElementById("password");
  console.log(passwordCopy);
  passwordCopy.select();

  document.execCommand("copy");

  alert("Password copied to clipboard");
}


// Global Variables Declared
var lowerCase;
var upperCase;
var numeric;
var specialChar;
var passwordLength;


// Prompt Users for password criteria 
function promptUser() {

  // Prompt the user for password length
  passwordLength = prompt("What length password would you like?")

  // Continue to prompt user until requirement is met
  // Length of at least 8 characters and no more than 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again");
    passwordLength = prompt("Enter a new password length between 8-128");
  }

  // Confirm character types
  lowerCase = confirm("Would like lowercase characters?");
  upperCase = confirm("Would like uppercase characters?");
  numeric = confirm("Would like numeric characters?");
  specialChar = confirm("Would like specialChar characters?");


  // If no character type selected
  if (lowerCase === false && upperCase === false && 
    numeric === false && specialChar === false) {
      // Continue to prompt user until at least one type valid
      promptUser();
    }

}


// Alphabetic and numeric strings
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharLetters = "~!@#$%^&*?_<>+{}";


// Arrays with different charater types
var lowerCaseArray = lowerCaseLetters.split("");
var upperCaseArray = upperCaseLetters.split("");
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray =  specialCharLetters.split("");


// Valid character Array - nested [["upperArray"],["lowerArray"]]
var validChar = [];

// Check prompts to see which types are valid
function checkPrompts() {

  // Check if lowercase valid
  if(lowerCase) {
    validChar.push(lowerCaseArray);
  }
  // Check if uppercase valid
  if(upperCase) {
    validChar.push(upperCaseArray);
  }
  // Check if numeric valid
  if(numeric) {
    validChar.push(numericArray);
  }
  // Check if special char valid
  if(specialChar) {
    validChar.push(specialCharArray);
  }
}

// Generates the type of digit - "lowerCase" "numeric"
function generateRandomType() {
  // generate a number between 0 and validChar length
  return Math.floor(Math.random() * validChar.length);
}

// Generates the char in type array - "k" 9
function generateRandomChar(typeIdx) {
  // generate a number between 0 and typeIdx array length
  return Math.floor(Math.random() * validChar[typeIdx].length);
}

// Make password using valid characters in validChar
function makePassword() {

  // Password Array
  var password = [];

  // For each character in the password
  for (var i = 0; i < passwordLength; i++) {

    // Randomly generate number between 0 and validChar array
    // This indicates which type we will use
    var typeIdx = generateRandomType();

    // Randomly generate number between 0 and typeIdx array 
    // This indicates which charater to pick in typeIdx array
    var charIdx = generateRandomChar(typeIdx);

    // Charater for position i
    var randomChar = validChar[typeIdx][charIdx];

    // add element to password
    password.push(randomChar);

  }

  // Join password letters together
  return password.join("");
}

// Generate the password 
function generatePassword() {
  // Set variables for user options
  promptUser();

  // Check which prompts are valid, pushes valid arrays to validChar
  checkPrompts();

  // Make password based on availablle characters in validChar
  var pass = makePassword();

  // Return Password
  // console.log for now
  return pass;
}


// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page