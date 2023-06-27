import {cheese} from "../composition"
import {sauce} from "../composition"
import {ingredients} from "../composition"
import {main} from "../composition"

const firstCover = document.querySelector (".first")
const secondCover = document.querySelector(".second")
const thirdCover = document.querySelector(".third")
const forthCover = document.querySelector(".forth")
const orderButton = document.querySelector(".fift")



 
 main.addEventListener("click" , function() {
  firstCover.remove()
})


ingredients.addEventListener("click" , function() {
  secondCover.remove()
})


cheese.addEventListener("click" , function() {
  thirdCover.remove()
})


sauce.addEventListener("click" , function() {
  forthCover.remove()
})

sauce.addEventListener("click" , function() {
  forthCover.remove()
})

sauce.addEventListener("click" , function() {
  orderButton.remove()
})