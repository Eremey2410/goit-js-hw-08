import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FORM_LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populatedForm();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(FORM_LOCALSTORAGE_KEY);
  console.log('Submit:', formData);
}
function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function populatedForm() {
  const savedMessage = localStorage.getItem(FORM_LOCALSTORAGE_KEY);
  const parsedSavedMessage = JSON.parse(savedMessage);
  if (parsedSavedMessage) {
    for (const key in parsedSavedMessage) {
      document.querySelector(`[name = ${key}]`).value = parsedSavedMessage[key];
    }
    console.log('Значение при перезагрузке', parsedSavedMessage);
  }
}
