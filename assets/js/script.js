// Assignment code here

var lowercaseCharcters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharcters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharcters = "0123456789";
var specialCharcters = "~}|{`_^]\[@?>=<;:/.-,+*)('&%$#!";

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

    inputNumber = confirm("should it contain numbers?");
    inputSpecialCharcters = confirm("should it contain special charcters?")
    inputUppercase = confirm("should it contain uppercase letters?")
    inputLowercase = confirm("should it contain lowercase letters?")
     

}

function RandomInteger(max_num) {
  return Math.floor(Math.random()*max_num);
}

function generatePassword() {
  var password_input = input()
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
