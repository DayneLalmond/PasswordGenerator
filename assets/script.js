// Variables listed in arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];
  
// The selectors to use elements for the function
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.querySelector("#password");

// The opening function prompts the entire generator
function openPrompt() {
  var totalCharacters = prompt("Length of password? Allowed 8-128 characters.");
  
  if (totalCharacters <= 7) {
    alert("Password length is too short. " + "(" + totalCharacters + ")");
   } else
      if (totalCharacters >= 129) {
      alert("Password length is too long. " + "(" + totalCharacters + ")");
  } else
  // The total characters needs to meet the requirements to queue the next prompts
      if (totalCharacters >= 8) {
        var includeUppercase = confirm("Include uppercase?");
        var includeLowercase = confirm("Include lowercase?");
        var includeNumbers = confirm("Include numbers?");
        var includeSymbols = confirm("Include symbols?");
        let password = ""
        if (includeLowercase === true) {
          password = password.concat(lowercase);
        }
        if (includeUppercase === true) {
          password = password.concat(uppercase);
        }
        if (includeNumbers === true) {
          password = password.concat(numbers);
        }
        if (includeSymbols === true) {
          password = password.concat(symbols);
        }
        // The for loop doesn't get me the result I need. It is incomplete, 
        // but this is what I was able to establish so far. It will allow
        // me to store and concat the password.
        for (i=0; i < totalCharacters; i++);
        alert(password);
  } else
      if (totalCharacters == lowercase || uppercase || symbols) {
      alert("Please provide a number.");
  } else {
      return;
}
}

// This listener will check if the user clicks on the button
generateBtn.addEventListener("click", openPrompt);
