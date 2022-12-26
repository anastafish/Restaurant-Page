import {loadPage} from './functions/mainPage'
import {loadMenu} from './functions/menuPage'
import { loadHome } from './functions/homePage';
import { menuClick } from './functions/menuPage';
import { loadAbout } from './functions/aboutPage';
import { aboutClick } from './functions/aboutPage';
import './styles.css';

loadPage()
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu-link').classList.add('active')
    document.querySelector('.home-link').classList.remove('active')
    document.querySelector('.about-link').classList.remove('active')
    if (document.querySelector('.menu-first')){
        menuClick()
    }
    else{
        loadMenu()
    }
})

document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('.home-link').classList.add('active')
    document.querySelector('.menu-link').classList.remove('active')
    document.querySelector('.about-link').classList.remove('active')
    loadHome()
})


document.querySelector('.about').addEventListener('click', () => {
    document.querySelector('.about-link').classList.add('active')
    document.querySelector('.home-link').classList.remove('active')
    document.querySelector('.menu-link').classList.remove('active')
    if(document.querySelector('.about-msg')){
        aboutClick()
    }    
    else{
    loadAbout()}
})


