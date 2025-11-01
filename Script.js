// Toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth scroll for internal links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
