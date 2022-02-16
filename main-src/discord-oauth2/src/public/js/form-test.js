const nameInput = document.querySelector('[name="random-text"]');

nameInput.addEventListener('invalid', () => {
    nameInput.setCustomValidity('Please enter your random text.');
 });