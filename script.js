// Assignment code here
//strings for character types
var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?'; 

// Function for password
function generatePassword(){
  var availableChars = ''; 

  //asks for password length
var passwordLength = parseINT(prompt("How long would you like the password? (8-128 characters)"));

// validates the password length 
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
  passwordLength = parseInt(prompt("Invalid Length. Please select a number between 8-128."));
}
//Asks character types 
if (confirm("Would you like to include lowercase characters?")){
  availableChars += lowerCaseChars;
}
if (confirm("Would you like to include uppercase characters?")){
  availableChars += upperCaseChars;
}
if (confirm("Would you like to include number characters?")){
  availableChars += numberChars;
}
if (confirm("Would you like to include special characters?")){
  availableChars += specialChars;
}
// checks that there is at least one character type
while (availableChars.lenght === 0){
  alert("You must select at least one character type.");
  return generatePassword();
}

// Generates a password with guidelines indicated
var password ='';
for (var i = 0; i < passwordLength; i++){
  var randomIndex = Math.floor(Math.random() * availableChars.length);
  password += availableChars[randomIndex];

}

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);