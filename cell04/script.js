// script.js
const correctPassword = "1234"; // Password is now 1234
let enteredPassword = "";

// Check if the password has already been entered
if (localStorage.getItem("passwordEntered") === "true") {
  document.getElementById("passwordPopup").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
}

function addNumber(number) {
  enteredPassword += number;
  updatePasswordDisplay();
}

function clearPassword() {
  enteredPassword = "";
  updatePasswordDisplay();
}

function updatePasswordDisplay() {
  document.getElementById("passwordDisplay").textContent = enteredPassword || "Tap the numbers";
}

function checkPassword() {
  const errorMessage = document.getElementById("errorMessage");

  if (enteredPassword === correctPassword) {
    // Store the password state in localStorage
    localStorage.setItem("passwordEntered", "true");

    document.getElementById("passwordPopup").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    errorMessage.textContent = "Incorrect password. Try again.";
    clearPassword();
  }
}

// Show password popup on page load if password hasn't been entered
window.onload = function () {
  if (localStorage.getItem("passwordEntered") !== "true") {
    document.getElementById("passwordPopup").classList.remove("hidden");
  }
};