import styles from './list.scss'
import {composition, list1} from "../composition"
import {list2} from "../composition"
import {list3} from "../composition"
import {list4} from "../composition"
import {list5} from "../composition"
import {list6} from "../composition"
import {list7} from "../composition"
import {list8} from "../composition"
import {list9} from "../composition"
import {list10} from "../composition"
import {list11} from "../composition"
import {list12} from "../composition"
import {list13} from "../composition"
import {list14} from "../composition"
import {list15} from "../composition"
const orderList = document.querySelector('.list-order')

const table = document.createElement('ul');
const table2 = document.createElement('li');
const table3 = document.createElement('li');
const table4 = document.createElement('li');


composition.addEventListener("click", function (e) {
    table.innerHTML = e.target.innerHTML;
    orderList.append(table)
   
    });

