
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          navLinks.classList.remove('open');
        }
      });
    });
  }

 
  const contactForm = document.querySelector('.contact-form, .contact-form-kaart');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      
      contactForm.querySelectorAll('.error-message').forEach(el => el.remove());

      let isValid = true;

      function showError(input, message) {
        const error = document.createElement('div');
        error.classList.add('error-message');
        error.style.color = '#c00';
        error.style.fontSize = '0.95em';
        error.style.marginBottom = '8px';
        error.innerText = message;
        input.insertAdjacentElement('afterend', error);
        isValid = false;
      }

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (name && name.value.trim() === '') {
        showError(name, "Vul je naam in.");
      }

      if (email && email.value.trim() === '') {
        showError(email, "Vul je e-mailadres in.");
      } else if (email) {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (!email.value.match(emailPattern)) {
          showError(email, "Vul een geldig e-mailadres in.");
        }
      }

      if (message && message.value.trim() === '') {
        showError(message, "Vul een bericht in.");
      }

      if (isValid) {
        window.location.href = "succes.html";
      }
    });
  }

  
  var cookies = document.getElementById('cookies-message');
  if (cookies) {
    cookies.style.display = 'block';
    document.getElementById('cookies-ok').onclick = function() {
      cookies.style.display = 'none';
    };
  }
});
