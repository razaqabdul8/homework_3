// The script below is for a password generator that will generate a password that can consist of 8-50 characters with various options as to their case and specialty

//Query Selector and Event Listener to add and queue successive questions upon button being pressed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables for the types and forms of characters to be used, which are specified upon the users request through means of javascriptconfirmation prompts. 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop to ensure that the password is indeed 8-50 characters long, which will offer an alert if otherwise.  
  while(confirmLength <= 7 || confirmLength >= 51) {
      alert("Password length must be between 8-50 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Basic alert utilizing the "confirmLength" variable to reiterate and "confirm", as the name of the variable implies, the number of characters chosen for to-be-generated password.  
      alert(`Your password will have ${confirmLength} characters`);

    // Through user input, determining through "confirm" javascript commands to ensure whether or not a certain parameter for the password is desired by the end-user 
    var confirmSpecialCharacter = confirm("Click the blue OK button to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click blue OK button to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click the blue OK button to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click the blue OK button to confirm if you would like to include uppercase characters");
      // A loop that will relay a message if none of the parameters was selected as desirable by the user 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click the blue OK button to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click the blue OK button to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click the blue OK button to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click the blue OK button to confirm if you would like to include uppercase characters");   
    } 

      // if clauses that assign an action to the password parameters if something needs fixing
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // blank string that will be filled based off of the math.random and math.floor functions loop that will select random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// writes the password to the #password input for dusplay
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}