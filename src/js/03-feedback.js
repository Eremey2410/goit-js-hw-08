const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
console.log(form);
form.addEventListener('input', onInput);
function onInput(event) {
  event.preventDefault();
  const event = {
    email: email,
    message: message,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, event.target);
  console.log(event);
  test();
}
function test() {
  form.textContent = localStorage.getItem(LOCALSTORAGE_KEY);
}
