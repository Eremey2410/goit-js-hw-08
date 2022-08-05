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
  localStorage.setItem(
    FORM_LOCALSTORAGE_KEY,
    JSON.stringify(FORM_LOCALSTORAGE_KEY)
  );
}

function populatedForm() {
  let savedMessage = localStorage.getItem(FORM_LOCALSTORAGE_KEY);
  if (parsedSavedMessage) {
    parsedSavedMessage = JSON.parse(savedMessage);
    Object.entries(parsedSavedMessage).forEach(([name, value]) => {
      FORM_LOCALSTORAGE_KEY[name] = value;
      formData.elements[name].value = value;
    });
  }
}
