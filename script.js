const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Thanks for your message! This demo form does not send or store submissions yet.';
    form.reset();
  });
}
