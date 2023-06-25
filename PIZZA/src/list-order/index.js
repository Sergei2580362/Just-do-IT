import styles from './list.scss';

const listOrder = document.querySelector('.list-order');
const listItems = document.querySelectorAll('ul.main li, ul.sauce li');
// const mainListItems = document.querySelectorAll('.main li');

// const title = document.createElement('h2');
// title.textContent = 'Область просмотра заказа';
// listOrderContainer.appendChild(title);

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('selected')) {
      const newItem = document.createElement('li');
      newItem.textContent = item.textContent;
      newItem.classList.add('selected');

      listOrder.innerHTML = ''; // Очищаем содержимое .list-order
      listOrder.appendChild(newItem); // Добавляем новый элемент в .list-order

      item.classList.add('selected'); // Добавляем класс selected к выбранному элементу

      newItem.addEventListener('click', () => {
        newItem.remove(); // Удаляем выбранный элемент из .list-order
        item.classList.remove('selected'); // Удаляем класс selected у соответствующего элемента в .main
      });
    }
  });
});

