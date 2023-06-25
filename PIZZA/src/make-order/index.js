import styles from './order.scss';

const button = document.createElement('button');
button.textContent = 'ЗАКАЗАТЬ';
button.addEventListener('click', () => {
  alert('Ваш заказ оформлен!');
});

export const makeOrder = document.querySelector('.make-order');
makeOrder.appendChild(button);
