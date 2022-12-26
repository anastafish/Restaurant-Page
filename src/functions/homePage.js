export function loadHome() {
    document.querySelector('.menu-first').style.display = "none"
    document.querySelector('.menu-second').style.display = "none"
    document.querySelector('.menu-third').style.display = "none"
    document.querySelector('.menu-fourth').style.display = "none"
    document.querySelector('.menu-fifth').style.display = "none"
    document.querySelector('.about-msg').style.display = "none"

    document.querySelector('.first').style.display = "block"
    document.querySelector('.second').style.display = "block"
    document.querySelector('.third').style.display = "block"
    document.querySelector('.main').classList.remove('main-menu')
}