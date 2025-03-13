// script.js
const correctPassword = "1234"; // Password is now 1234
let enteredPassword = "";

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
    document.getElementById("passwordPopup").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    errorMessage.textContent = "Incorrect password. Try again.";
    clearPassword();
  }
}

function showPortfolio(portfolioId) {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById(portfolioId).classList.remove("hidden");
}

function goBack() {
  document.querySelectorAll(".portfolio").forEach(portfolio => {
    portfolio.classList.add("hidden");
  });
  document.getElementById("mainPage").classList.remove("hidden");
}

// Show password popup on page load
window.onload = function () {
  document.getElementById("passwordPopup").classList.remove("hidden");
};