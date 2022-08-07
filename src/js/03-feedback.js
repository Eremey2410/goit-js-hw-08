import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populatedForm();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM_LOCALSTORAGE_KEY);
  formData = {};
  console.log('Submit:', formData);
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populatedForm() {
  let savedMessage = localStorage.getItem(FORM_LOCALSTORAGE_KEY);

  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);

    Object.entries(savedMessage).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
