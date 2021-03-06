// *****************
// *** VARIABLES ***
// *****************

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
// Contains ONLY valid character arrays user requests
var validChar;

// Generate button 
var generateBtn = document.querySelector("#generate");
// Copy button 
var copyBtn = document.querySelector("#copy");

// *****************
// ***** WRITE *****
// *****************

// Write password to the #password input
function writePassword() {

  // Initialize new variables each time a password is made
  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var specialChar = false;
  var passwordLength = 0;

  // Generate password string
  var password = generatePassword();
  // Locate password text in document
  var passwordText = document.querySelector("#password");
  // Assign password generated to the password text
  passwordText.value = password;
}

// *****************
// ***** COPY ******
// *****************

// Copy password to clipboard
function copyPassword() {
  // Get password element to copy
  var passwordCopy = document.getElementById("password");
  // Select text to have copied
  passwordCopy.select();
  // Execuate copy command
  document.execCommand("copy");
  // Alert user that password is copied
  alert("Password copied to clipboard");
}

// *****************
// * EVENTLISTENER *
// *****************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);


// *****************
// **** PROMPT *****
// *****************

// Prompt user for password criteria 
function promptUser() {

  // Prompt the user for password length
  passwordLength = prompt("What length password would you like?");

  // Continue to prompt user until requirement is met
  // Length of at least 8 characters and no more than 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again");
    // Give user further specification
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
      // alert user to select character type
      alert("Try again: You didn't select a character type!");
      // Continue to prompt user until at least one type valid
      promptUser();
    }
}


// *****************
// ***** CHECK *****
// *****************

// Check prompts to see which types are valid
function checkPrompts() {
  
  // First set to empty array
  validChar = [];

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

// *****************
// ***** TYPEID ****
// *****************

// Generates the type of digit - "lowerCase"
function generateRandomType() {

  // Generate a number between 0 and validChar length
  return Math.floor(Math.random() * validChar.length);
}


// *****************
// ***** CHARID ****
// *****************

// Generates the char in type array - "k"
function generateRandomChar(typeIdx) {

  // Generate a number between 0 and typeIdx array length
  return Math.floor(Math.random() * validChar[typeIdx].length);
}


// *****************
// ***** MAKE ******
// *****************

// Make password using valid characters in validChar array
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

    // Add element to password array
    password.push(randomChar);

  }
  // Join password array into string
  return password.join("");
}


// *****************
// **** GENERATE ***
// *****************

// Generate the password 
function generatePassword() {

  // Set variables for user options
  promptUser();

  // Check which prompts are valid, pushes valid arrays to validChar
  checkPrompts();

  // Make password based on available characters in validChar
  var pass = makePassword();

  // Return password to write to #password
  return pass;
}