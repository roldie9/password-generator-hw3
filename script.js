// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']


// Write password to the #password input

function generatePassword() {
    let password = [];
    let passwordChars = [];
    let passwordText = '';


    let length = prompt("How many characters do you want?");
    let lower = confirm("Do you want Lower Case characters?");
    let upper = confirm("Do you want Upper Case characters?");
    let number = confirm("Do you want Numerical characters?");
    let special = confirm("Do you want Special characters?");

    if (lower === true) {
        for (x of lowerCase) {
            password.push(x);
        }
    }

    if (upper === true) {
        for (x of upperCase) {
            password.push(x);
        }
    }

    if (number === true) {
        for (x of numberChar) {
            password.push(x);
        }
    }

    if (special === true) {
        for (x of specialChar) {
            password.push(x);
        }
    }


    for (var i = 0; i <= length; i++) {
        let passwordx = Math.floor(Math.random() * length);
        let passChar = password[passwordx];
        passwordChars.push(passwordx);

    }

    writePassword(passwordChars);


}
   

function writePassword(passwordText) {
  var password = passwordText();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER