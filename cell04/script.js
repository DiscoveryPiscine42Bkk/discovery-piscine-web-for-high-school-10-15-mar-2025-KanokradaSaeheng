// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky navigation bar
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const navbarMargin = 20; // Same as the margin in CSS

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight - navbarMargin) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});