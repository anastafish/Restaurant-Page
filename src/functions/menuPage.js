import {maker} from "./mainPage"
import chs from '../images/chsbrgr.jpeg'
import chkn from '../images/chknbrgr.jpeg'
import fries from '../images/fries.jpeg'
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
    document.querySelector('.cheeseburger').setAttribute('src', chs)


    maker('img', 'chickenburger', document.querySelector('.menu-second'))
    document.querySelector('.chickenburger').setAttribute('src', chkn)

    maker('img', 'fries', document.querySelector('.menu-third'))
    document.querySelector('.fries').setAttribute('src', fries)

    maker('img', 'drink', document.querySelector('.menu-fourth'))
    document.querySelector('.drink').setAttribute('src', drink)

    maker('img', 'souce', document.querySelector('.menu-fifth'))
    document.querySelector('.souce').setAttribute('src', souce)    

    menuClick()

}
export function menuClick() {
    const main = document.querySelector('.main')
document.querySelector('.menu-first').style.display = "block"
    document.querySelector('.menu-second').style.display = "block"
    document.querySelector('.menu-third').style.display = "block"
    document.querySelector('.menu-fourth').style.display = "block"
    document.querySelector('.menu-fifth').style.display = "block"

    document.querySelector('.first').style.display = "none"
    document.querySelector('.second').style.display = "none"
    document.querySelector('.third').style.display = "none"
    document.querySelector('.about-msg').style.display = "none"
    main.classList.add('main-menu')
 }
