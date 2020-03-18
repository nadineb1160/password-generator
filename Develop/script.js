// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Global Variables 
var lowerCase;
var upperCase;
var numeric;
var specialChar;
var length;


// Prompt Users for password criteria 
function promptUser() {

  lowerCase = confirm("Would like lowercase characters?");
  upperCase = confirm("Would like uppercase characters?");
  numeric = confirm("Would like numeric characters?");
  specialChar = confirm("Would like specialChar characters?");
  length = prompt("What length password would you like?")

  if (length < 8 || length > 128) {
    alert("Please try again");
    length = prompt("Enter a new password length between 8-128");
  }

  // if no character type selected
  if (lowerCase === false && upperCase === false && 
    numeric === false && specialChar === false) {
      promptUser();
    }

}

promptUser();

// Alphabetic and numeric strings
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharLetters = "~!@#$%^&*?_<>+{}";

// Split string and 
var lowerCaseArray = lowerCaseLetters.split();
var upperCaseArray = upperCaseLetters.split();
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray =  specialCharLetters.split();



// Valid character Array
var validChar = [];

// Check prompts
function checkPrompts() {
  // Check if lowercase valid
  if(lowerCase) {
    validChar.push(lowerCaseArray);
  }
  // Check if uppercase valid
  if(upperCaseArray) {
    validChar.push(upperCaseArray);
  }
  // Check if numeric valid
  if(numericArray) {
    validChar.push(numericArray);
  }
  // Check if special char valid
  if(specialCharArray) {
    validChar.push(specialCharArray);
  }
}

// Generates the type of digit
function generateRandomType() {
  // generate a number between 0 and validChar length
  return Math.floor(Math.random() * validChar.length)
}

// Generates the char in type array
function generateRandomChar(typeIdx) {
  // generate a number between 0 and typeIdx array length
  return Math.floor(Math.random() * validChar[typeIdx].length)
}

// Make password
function makePassword() {

  // Password Array
  var password = []

  // for each character in the password
  for (var i = 0; i < length; i++) {

    // randomly generate number between 0 and validChar array
    var typeIdx = generateRandomType();

    // randomly generate number between 0 and typeIdx array  array
    var charIdx = generateRandomChar(typeIdx);

    // Charater for position i
    var randomChar = validChar[typeIdx][charIdx];

    // add element to password
    password.push(randomChar);

  }

  // Join password letters together
  return password.join();
}



// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page