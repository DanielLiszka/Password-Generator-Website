// Assignment code here

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "~}|{`_^]\[@?>=<;:/.-,+*)('&%$#!";
var finalstring = ""

function input(){
    passwordLength = Number(prompt("Please choose a password length between 8 and 128"));
    while (passwordLength === null){
      alert("a response is needed");
      passwordLength = Number(prompt("Please choose a password length between 8 and 128"));}
    
    while (passwordLength < 8){
      alert("password length must be at least 8 numbers");
      passwordLength = Number(prompt("Please choose a password length between 8 and 128"));}

    while (passwordLength > 128){
      alert("password length must be no more than 128 numbers");
      passwordLength = Number(prompt("Please choose a password length between 8 and 128"));}
    return passwordLength
}   

function characters(){
  inputNumber = confirm("should it contain numbers?");
  inputSpecialCharacters = confirm("should it contain special characters?");
  inputUppercase = confirm("should it contain uppercase letters?");
  inputLowercase = confirm("should it contain lowercase letters?");

  while (inputNumber === false && inputSpecialCharacters === false && inputUppercase === false && inputLowercase === false){
    alert("You must select one of the password criteria");
    inputNumber = confirm("should it contain numbers?");
    inputSpecialCharacters = confirm("should it contain special characters?")
    inputUppercase = confirm("should it contain uppercase letters?")
    inputLowercase = confirm("should it contain lowercase letters?")
  }
  if (inputNumber === true){
    finalstring = finalstring.concat(numberCharacters);
  }
  if (inputSpecialCharacters === true){
    finalstring = finalstring.concat(specialCharacters);
  }
  if (inputUppercase === true) {
    finalstring = finalstring.concat(uppercaseCharacters);
  }
  if (inputLowercase === true){
    finalstring = finalstring.concat(lowercaseCharacters);
  }
  return finalstring
}

function RandomInteger(max_num) {
  return Math.floor(Math.random()*max_num);
}

function generatePassword() {
  var password = "";
  var charcter_length = input()
  var characterstring = characters()



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
