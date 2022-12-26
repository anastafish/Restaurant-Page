export function maker(elem, cls, dom){
    const element = document.createElement(elem)
    element.classList.add(cls)
    dom.appendChild(element)
}

function loadHeader(){
    const header = document.querySelector('.header')

maker('h2', 'home', header)
maker('h2', 'menu', header)
maker('h2', 'about',header )

maker('a', 'home-link',document.querySelector('.home'))
document.querySelector('.home-link').textContent = "Home"
 
maker('a', 'menu-link',document.querySelector('.menu'))
document.querySelector('.menu-link').textContent = "Menu"

maker('a', 'about-link',document.querySelector('.about'))
document.querySelector('.about-link').textContent = "About"

}

function loadMain(){
    const main = document.querySelector('.main')
    maker('div', 'first',main)
    maker('div', 'second',main)
    maker('div', 'third',main)

    maker('p', 'para', document.querySelector('.first'))
    document.querySelector('.para').textContent = "Welcome to Our Restaurant We’re delighted to have you as our customer. We know you won’t be disappointed with your order"

    maker('p', 'hours', document.querySelector('.second'))
    document.querySelector('.hours').textContent = "Sunday: 1 - 2 Monday: 1 -2 "

    maker('p', 'locations', document.querySelector('.third'))
    document.querySelector('.locations').textContent = "Welcome to our Restaurant"
}

function loadFooter(){
    const footer = document.querySelector('.footer')

    maker('h4', 'footer-first', footer)
    maker('h4', 'footer-second', footer)
    maker('h4', 'footer-third', footer)

    document.querySelector('.footer-first').textContent = "first side"
    document.querySelector('.footer-second').textContent = "second side"
    document.querySelector('.footer-third').textContent = "third side"

}


export function loadPage() {     
    const content = document.querySelector('#content')  

    maker("div", "header", content)
    maker("div", "main", content)
    maker("div", "footer", content) 
        
    const header = document.querySelector('.header')    
    const main = document.querySelector('.main')    
    const footer = document.querySelector('.footer')
    loadHeader()
    loadMain()
    loadFooter()
}
