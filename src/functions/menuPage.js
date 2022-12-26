import {maker} from "./mainPage"
import pizza from '../images/pizza.jpg'
import chkn from '../images/chknbrgr.jpg'
import fries from '../images/fries.jpg'
import drink from '../images/drinks.jpeg'
import souce from '../images/souces.jpeg'

export function loadMenu() {
    const main = document.querySelector('.main')

    maker('div', 'menu-first',main)
    maker('div', 'menu-second',main)
    maker('div', 'menu-third',main)
    maker('div', 'menu-fourth',main)
    maker('div', 'menu-fifth',main)


    maker('img', 'cheeseburger', document.querySelector('.menu-first'))
    maker('p', 'first-item', document.querySelector('.menu-first'))
    document.querySelector('.first-item').textContent = "A traditional Neapolitan Margherita pizza with tomato sauce and fresh tomatoes, mozzarella cheese and basil"
    document.querySelector('.cheeseburger').setAttribute('src', pizza)


    maker('img', 'chickenburger', document.querySelector('.menu-second'))
    maker('p', 'second-item', document.querySelector('.menu-second'))
    document.querySelector('.second-item').textContent = "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"
    document.querySelector('.chickenburger').setAttribute('src', chkn)

    maker('img', 'fries', document.querySelector('.menu-third'))
    maker('p', 'third-item', document.querySelector('.menu-third'))
    document.querySelector('.third-item').textContent = "Our fries are made from locally sourced, fresh Aussie potatoes, cooked with their skins on in a sustainable non-gmo cottonseed sunflower oil blend and ready to be enjoyed with any of our internationally inspired dipping sauces."
    document.querySelector('.fries').setAttribute('src', fries)

    maker('img', 'drink', document.querySelector('.menu-fourth'))
    maker('p', 'fourth-item', document.querySelector('.menu-fourth'))
    document.querySelector('.fourth-item').textContent = "A free drink of your choice!";
    document.querySelector('.drink').setAttribute('src', drink)

    maker('img', 'souce', document.querySelector('.menu-fifth'))
    maker('p', 'fifth-item', document.querySelector('.menu-fifth'))
    document.querySelector('.fifth-item').textContent = "Choose one of our Souces collection and you won't be disappointed!";
    document.querySelector('.souce').setAttribute('src', souce);


    document.querySelector('.main').classList.add('main-menu')
    menuClick()


}
export function menuClick() {
    const main = document.querySelector('.main')
    document.querySelector('.menu-first').style.display = "flex"
    document.querySelector('.menu-second').style.display = "flex"
    document.querySelector('.menu-third').style.display = "flex"
    document.querySelector('.menu-fourth').style.display = "flex"
    document.querySelector('.menu-fifth').style.display = "flex"

    document.querySelector('.first').style.display = "none"
    document.querySelector('.second').style.display = "none"
    document.querySelector('.third').style.display = "none"

    if (document.querySelector('.about-msg')){
    document.querySelector('.about-msg').style.display = "none"}
    else return;
    main.classList.add('main-menu')
    console.log("fukc")
 }
