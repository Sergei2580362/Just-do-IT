import styles from './list.scss'
import {cheese} from "../composition"
import {sauce} from "../composition"
import {ingredients} from "../composition"
import {main} from "../composition"
const orderList = document.querySelector('.list-order')
const priceWindow = document.querySelector('.priceWindow')




function addItem (e) {
        let li = document.createElement("li")
        li.innerHTML = e.target.innerHTML;
        orderList.append(li)
       
       }



  main.addEventListener("click" , addItem, {once: true})
  ingredients.addEventListener("click" , addItem, {once: true})
  cheese.addEventListener("click" , addItem, {once: true})
  sauce.addEventListener("click" , addItem, {once: true});

  
 





