const emailBox = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");
const btn = document.getElementById("submit");
const userInput = emailBox.value;

btn.addEventListener("click", function(){
 const emailIsValid = emailBox.value.includes('@') && userInput.trim().length > 0;

 if (!emailIsValid) {
    errorMsg.innerHTML = "Check your email please";
 } else {
    errorMsg.innerHTML = " "
 }

});

