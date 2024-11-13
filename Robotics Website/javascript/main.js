// Code adapted from Joseph Silber on Stack Overflow: 
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href^="#"]').forEach(navLink => {
  navLink.addEventListener('click', function (event) {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    event.preventDefault();
  });
});