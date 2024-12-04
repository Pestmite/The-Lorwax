// Code adapted from Joseph Silber on Stack Overflow (lines 4-12): 
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href^="#"]').forEach(navLink => {
  navLink.addEventListener('click', function (event) {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    event.preventDefault();
  });
});

document.querySelector('.arrow-container').addEventListener('mouseover', () => {
  document.querySelector('.footer-arrow').classList.add('arrow-js');
});

document.querySelector('.arrow-container').addEventListener('mouseout', () => {
  document.querySelector('.footer-arrow').classList.remove('arrow-js');
});

document.querySelector('.translate-element').addEventListener('mouseover', () => {
  document.querySelector('.translate').classList.add('translate-js');
});

document.querySelector('.translate-element').addEventListener('mouseout', () => {
  document.querySelector('.translate').classList.remove('translate-js');
});
