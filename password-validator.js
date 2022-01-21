const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function passwordLength(input) {
  let tooShort = false;
  let reason = "None";

  if (input.length < 10) {
    //Check to see if user input is less than 10 charactes
    tooShort = true;
    reason = `Too short`;
  }

  let answer = [tooShort, reason];
  return answer;
}

function passwordSpaces(input) {
  let spaces = false;
  let reason = `None`;

  for (let i = 0; i < input.length; i++) {
    //Loop through input
    if (input[i] === ` `) {
      //Check for any spaces
      spaces = true;
      reason = `Remove spaces`;
    }
  }

  let answer = [spaces, reason];
  return answer;
}

reader.question(
  "Welcome to Password Validator.\nPlease enter a password you would like to validate.\n",
  function (input) {
    let goodPassword = true; //Boolean for the user having a strong password
    let badPasswordLength = [];
    let badPasswordSpaces = [];

    badPasswordLength = passwordLength(input).slice(0, 2); //Copy the results of the passwordLength function
    badPasswordSpaces = passwordSpaces(input).slice(0, 2); //Copy the results of the passwordSpaces function

    if (badPasswordLength[0]) {
      //Check to see if the user's input was too short
      console.log(`Bad Password. ${badPasswordLength[1]}.`);
    } else if (badPasswordSpaces[0]) {
      //Check to see if the user's input had any spaces
      console.log(`Bad Password. ${badPasswordSpaces[1]}.`);
    } else if (goodPassword) {
      console.log(`Good Password.`);
    }

    reader.close();
  }
);
