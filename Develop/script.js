// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
console.log(generateBtn);
console.log(copyBtn);


// Dataset Variables
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsDataset = "";
var newPassword = "";

// Function for generated password 
function generatePassword() {
optionsDataset = "";
  // Window prompt for password criteria, Choose a password length of 8 - 128 characters 
  var userChoice = window.prompt ("Choose a password length between 8 - 128 characters");
  console.log(userChoice);
  console.log(typeof userChoice);
//Validate the input 
    // WHAT if the 'userchoice' VALUE is out of bounds(?)
    if(userChoice < 8 || userChoice > 128) {
       console.log("Out of bounds");
       return "Please choose a password length between 8 - 128 characters, Try again!";
    }

// Window confirm the user to select what characters should be allowed
  var confirmUppercase = window.confirm("Would you like to use uppercase letters in your password");
  var confirmLowercase = window.confirm("Would you like to lowercase letters in your password");
  var confirmNumber = window.confirm("Would you like to use numbers in your password");
  var confirmSpecial = window.confirm("Would you like to use symbols in your password");
  console.log(confirmUppercase, confirmLowercase, confirmNumber, confirmSpecial);

// // Validate the inputfor characters
  if(confirmUppercase) {
    //  code to add upperCase letters to our OptionDataset variable
    optionsDataset = optionsDataset + upperChar;
  }
    if (confirmLowercase) {
      //  code to add lowercase letters to our OptionDataset variable
    optionsDataset = optionsDataset + lowerChar;
  }
  if (confirmNumber) {
    //  code to add numbers to our OptionDataset variable
   optionsDataset = optionsDataset + numberChar;
 }
  if (confirmSpecial) {
     //  code to add special characters to our OptionDataset variable
    optionsDataset = optionsDataset + specialChar;
  }

  console.log(optionsDataset);
  console.log(optionsDataset.length);

// Generate Password
var length = userChoice;
for (var i = 1; i <= length; i++) {
  var generatePass = Math.floor(Math.random() * optionsDataset.length);

  newPassword = newPassword + optionsDataset[generatePass];
  console.log(newPassword);
}
// saves passwrod to the var newPassword
return newPassword;
}
// Write password to the #password input
function writePassword() {
  // resets var newPassowrd so new passord field is blank
  newPassword = "";
  //runs function gernratePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// prints value to id passowrd in HTML
  passwordText.value = password;
}

// BONUS Feature by Amrita! Adds copy button to password generater 
function copyPassword() {
  var copy = document.getElementById("password");
  copy.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

