// Fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.opacity = "1";
  });
  
  // Hover and Click Animations
  const cards = document.querySelectorAll(".card");
  
  cards.forEach((card) => {
    // Hover Effect
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.1)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
  
    // Click Effect
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.9)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 200);
  
      // Redirect to portfolio pages (example)
      if (card.id === "ksaeheng") {
        window.location.href = "ksaeheng.html";
      } else if (card.id === "nbannama") {
        window.location.href = "nbannama.html";
      }
    });
  });