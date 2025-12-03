/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
navMenu.classList.add('show-menu');
  }); 
}

/*===== MENU HIDDEN =====*/
if(navClose) {
  navClose.addEventListener('click', () => {
navMenu.classList.remove('show-menu');
  }); 
}

/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show-menu'); // исправлено classList
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);


function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

window.addEventListener('scroll', scrollUp);






/*==================== SHOW SCROLL UP ====================*/

const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContent) => {
      tabContent.classList.remove('tab__active');
    });
    target.classList.add('tab__active');

    tabs.forEach((tab) => {
      tab.classList.remove('tab__active');
    });
    tab.classList.add('tab__active');
  });
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact__form'),
      contactName = document.getElementById('contact__name'),
      contactEmail = document.getElementById('contact__email'),
      contactSubject = document.getElementById('contact__subject'),
      contactMessage = document.getElementById('contact__message'),
      errorMessage = document.getElementById('error-message');

// ✅ Инициализация EmailJS
emailjs.init('VoaRPthGmPqQN8MDT');

const sendEmail = (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('input[type="submit"]');
  submitBtn.disabled = true;

  // Проверка на пустые поля
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage.value === ''
  ) {
    errorMessage.textContent = 'Please fill in all the input fields';
    submitBtn.disabled = false;
    return;
  }

  // Отправка письма через EmailJS
  emailjs.sendForm('service_vyj2gdi', 'template_qfs83s1', '#contact__form', 'VoaRPthGmPqQN8MDT')
    .then(() => {
      errorMessage.classList.add('color-first');
      errorMessage.textContent = 'Message sent successfully!';
      
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 5000);

      contactForm.reset();
      submitBtn.disabled = false;
    })
    .catch((error) => {
      alert('Oops! Something went wrong... ' + error.text);
      submitBtn.disabled = false;
    });
};

contactForm.addEventListener('submit', sendEmail);