/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list'); 

/**
 * End Global Variables
 * Start Helper Functions
 */

function buildNav() {
  sections.forEach((section, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `Section ${index + 1}`;
    a.href = `#section${index + 1}`;
    a.className = 'menu__link nav__link'; // Add 'nav__link' class for later reference
    li.appendChild(a);
    navbar.appendChild(li);
  });
}

function setActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      section.classList.add('your-active-class');
      
      // Remove the active class from all nav links
      document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
      
      // Find the corresponding nav link and add the active class
      const navLink = document.querySelector(`a[href="#${section.id}"]`);
      if (navLink) {
        navLink.classList.add('active');
      }
    } else {
      section.classList.remove('your-active-class');
    }
  });
}


function scrollToSection(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 */

buildNav();
window.addEventListener('scroll', setActiveSection);
navbar.addEventListener('click', scrollToSection);
