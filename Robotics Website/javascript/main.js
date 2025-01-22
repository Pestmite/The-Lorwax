/* || Header Scroll */

let startY = 0;
let HIDEMIN = 350;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

  if (currentY > HIDEMIN) {
    if (currentY > startY && innerWidth > 660) {
      document.querySelector('.header').style.transform = 'translateY(-150%)';
    } else {
      document.querySelector('.header').style.transform = 'translateY(0)';
    }
  } else {
    document.querySelector('.header').style.transform = 'translateY(0)';
  }

  startY = currentY;
});

/* || Subheader Scroll */

console.log(document.querySelector('.header'));

document.querySelectorAll('a[href^="#"]').forEach(navLink => {
  navLink.addEventListener('click', function (event) {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    event.preventDefault();
  });
});

/* || Arrow Animation */

document.querySelector('.arrow-container').addEventListener('mouseover', () => {
  document.querySelector('.footer-arrow').classList.add('arrow-js');
});

document.querySelector('.arrow-container').addEventListener('mouseout', () => {
  document.querySelector('.footer-arrow').classList.remove('arrow-js');
});

/* || Mobile menu */

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.off-screen-menu').classList.toggle('active');
});
