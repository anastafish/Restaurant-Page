import {loadPage} from './functions/mainPage'
import {loadMenu} from './functions/menuPage'
import { loadHome } from './functions/homePage';
import { menuClick } from './functions/menuPage';
import { loadAbout } from './functions/aboutPage';
import { aboutClick } from './functions/aboutPage';
import './styles.css';

loadPage()
document.querySelector('.menu').addEventListener('click', () => {
    if (document.querySelector('.menu-first')){
        menuClick()
    }
    else{
        loadMenu()
    }
})

document.querySelector('.home').addEventListener('click', () => {
    loadHome()
})


document.querySelector('.about').addEventListener('click', () => {
    if(document.querySelector('.about-msg')){
        aboutClick()
    }    
    else{
    loadAbout()}
})


