import styles from './composition.scss'
export const composition = document.querySelector('.composition');
export const main = document.querySelector('.main');
export const ingredients = document.querySelector('.ingredients')
export const cheese = document.querySelector('.cheese')
export const sauce = document.querySelector('.sauce')





export const list1 = document.createElement('li')
list1.innerHTML = "Салями"
main.append(list1)

export const list2 = document.createElement('li')
list2.innerHTML = "Курица"
main.append(list2)

export const list3 = document.createElement('li')
list3.innerHTML = "Шампиньены"
main.append(list3)

export const list4 = document.createElement('li')
list4.innerHTML = "Тунец"
main.append(list4)

export const list5 = document.createElement('li')
list5.innerHTML = "Паприка"
ingredients.append(list5)

export const list6 = document.createElement('li')
list6.innerHTML = "Помидоры"
ingredients.append(list6)

export const list7 = document.createElement('li')
list7.innerHTML = "Оливки"
ingredients.append(list7)

export const list8 = document.createElement('li')
list8.innerHTML = "Чили"
ingredients.append(list8)


export const list9 = document.createElement('li')
list9.innerHTML = "Чеддер"
cheese.append(list9)

export const list10 = document.createElement('li')
list10.innerHTML = "Пармезан"
cheese.append(list10)

export const list11 = document.createElement('li')
list11.innerHTML = "Моцарелла"
cheese.append(list11)

export const list12 = document.createElement('li')
list12.innerHTML = "Голландский"
cheese.append(list12)


export const list13 = document.createElement('li')
list13.innerHTML = "Барбекю"
sauce.append(list13)

export const list14 = document.createElement('li')
list14.innerHTML = "Голландез"
sauce.append(list14)

export const list15 = document.createElement('li')
list15.innerHTML = "Томатный"
sauce.append(list15)

export const list16 = document.createElement('li')
list16.innerHTML = "Чесночный"
sauce.append(list16)



function redLetters () {
    return this.style.color = "red";
  }




list1.addEventListener ("click", redLetters)
list2.addEventListener ("click", redLetters)
list3.addEventListener ("click", redLetters)
list4.addEventListener ("click", redLetters)
list5.addEventListener ("click", redLetters)
list6.addEventListener ("click", redLetters)
list7.addEventListener ("click", redLetters)
list8.addEventListener ("click", redLetters)
list9.addEventListener ("click", redLetters)
list10.addEventListener ("click", redLetters)
list11.addEventListener ("click", redLetters)
list12.addEventListener ("click", redLetters)
list13.addEventListener ("click", redLetters)
list14.addEventListener ("click", redLetters)
list15.addEventListener ("click", redLetters)
list16.addEventListener ("click", redLetters);


