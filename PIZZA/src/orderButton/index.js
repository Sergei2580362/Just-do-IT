import {cheese} from "../composition"
import {sauce} from "../composition"
import {ingredients} from "../composition"
import {main} from "../composition"

import styles from './order.scss'


export const button = document.createElement('button');
button.textContent = 'ЗАКАЗАТЬ';
button.addEventListener('click', () => {
  alert('ЗАКАЗ ОФОРМЛЕН!');
});
export const div = document.querySelector('.make-order');
div.appendChild(button);


