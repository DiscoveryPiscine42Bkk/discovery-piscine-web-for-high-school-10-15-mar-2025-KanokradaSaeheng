// Function to handle scroll events
function handleScroll() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.navbar ul li a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Check if the section is in view
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('active');
      navLinks[index].classList.add('active');
    } else {
      section.classList.remove('active');
      navLinks[index].classList.remove('active');
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });

      // Update the active class for navigation links
      document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger scroll event on page load
handleScroll();