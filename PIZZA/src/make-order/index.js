const button = document.createElement('button');
button.textContent = 'ЗАКАЗАТЬ';

button.addEventListener('click', () => {
  alert('ЗАКАЗ ОФОРМЛЕН!');
});

const div = document.querySelector('.make-order');

div.appendChild(button);