import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea');

const formData = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : { email: '', message: '' };

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    console.log('formData:', formData);
  email.value = formData.email;
  message.value = formData.message;
});

const handleChange = _.debounce(e => {
    const { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

const handleSubmit = e => {
  e.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

email.addEventListener('input', handleChange);
message.addEventListener('input', handleChange);
form.addEventListener('submit', handleSubmit);
