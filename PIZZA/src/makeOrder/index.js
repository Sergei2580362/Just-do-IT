import styles from './order.scss'
export const button = document.createElement('button');
button.textContent = 'ЗАКАЗАТЬ';
button.addEventListener('click', () => {
  alert('ЗАКАЗ ОФОРМЛЕН!');
});
export const div = document.querySelector('.make-order');
div.appendChild(button);

button.style.color = "yellow"
button.style.width = "200px"
button.style.height = "50px"
button.style.backgroundColor = "orange"
