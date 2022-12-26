export function loadHome() {
    if (document.querySelector('.menu-first')){
    document.querySelector('.menu-first').style.display = "none"
    document.querySelector('.menu-second').style.display = "none"
    document.querySelector('.menu-third').style.display = "none"
    document.querySelector('.menu-fourth').style.display = "none"
    document.querySelector('.menu-fifth').style.display = "none"
    document.querySelector('.main').classList.remove('main-menu')}

    if(document.querySelector('.about-msg')){
    document.querySelector('.about-msg').style.display = "none"
}

document.querySelector('.first').style.display = "block"
document.querySelector('.second').style.display = "block"
document.querySelector('.third').style.display = "block"
}
