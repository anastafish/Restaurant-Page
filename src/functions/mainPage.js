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
document.querySelector('.home-link').classList.add('active')
 
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

    maker('div', 'hours', document.querySelector('.second'))

    maker('h3', 'title', document.querySelector('.hours'))
    document.querySelector('.title').textContent = "Hours"
    
    maker('p', 'sunday', document.querySelector('.hours'))
    document.querySelector('.sunday').textContent = "Sunday: 9 - 11"

    maker('p', 'munday', document.querySelector('.hours'))
    document.querySelector('.munday').textContent = "Munday: 9 - 11"

    maker('p', 'tuesday', document.querySelector('.hours'))
    document.querySelector('.tuesday').textContent = "Tuesday: 9 - 11"

    maker('p', 'wednesday', document.querySelector('.hours'))
    document.querySelector('.wednesday').textContent = "Wednesday: 9 - 11"

    maker('p', 'thursday', document.querySelector('.hours'))
    document.querySelector('.thursday').textContent = "Thursday: 9 - 2"

    maker('p', 'friday', document.querySelector('.hours'))
    document.querySelector('.friday').textContent = "Friday: 9 - 2"

    maker('p', 'satarday', document.querySelector('.hours'))
    document.querySelector('.satarday').textContent = "Satarday: 9 - 2"




    const br = document.write("<br/>");


    maker('p', 'locations', document.querySelector('.third'))
    document.querySelector('.locations').textContent = "Thank You for visiting us (:"
}

function loadFooter(){
    const footer = document.querySelector('.footer')

    maker('h4', 'footer-first', footer)
    document.querySelector('.footer-first').textContent = `Copyright © ${new Date().getFullYear()} AnasTafish`

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
