import { maker } from "./mainPage"

export function loadAbout() {
    const main = document.querySelector('.main')
    main.classList.remove('main-menu')
    maker('p', 'about-msg', main)
    document.querySelector('.about-msg').textContent = "How we started The ALBAIK story began in 1974 in the city of Jeddah in the Kingdom of Saudi Arabia when the late Shakour AbuGhazalah saw there was a need for high quality affordable food, served fast and courteously, in a clean and inviting environment. Putting all his hard earned savings in this venture, Shakour signed an exclusive agency agreement with a company abroad for usage of proprietary deep-fried chicken spice blends and equipment, being the first in the market to introduce the “broast” chicken concept in all of Saudi Arabia. Broast Restaurant due to open at Al Madinah Road and Palestine Street crossroads in Jeddah Jeddah was expanding north from the old city and Shakour found an ideal location in the brand-new Al Dakheel Building at the crossroads of Al Madinah Road and Palestine Street in Jeddah. He started to build his first restaurant, but had to suspend the project because electric power had not reached the newly built building. The first Broast Restaurant in the Sharafiyah District of Jeddah Never one to give up, taking on challenges head on and finding solutions Shakour AbuGhazalah transformed an old warehouse he’d leased on Airport Road in the Sharafiyah District and opened the first Broast Restaurant in the Kingdom of Saudi Arabia there in September of 1974. In March 1976 a second Broast Restaurant finally opened in the Al Dakheel Building – the site originally picked to launch the chain."
    aboutClick()
}

export function aboutClick(){
    document.querySelector('.menu-first').style.display = "none"
    document.querySelector('.menu-second').style.display = "none"
    document.querySelector('.menu-third').style.display = "none"
    document.querySelector('.menu-fourth').style.display = "none"
    document.querySelector('.menu-fifth').style.display = "none"

    document.querySelector('.first').style.display = "none"
    document.querySelector('.second').style.display = "none"
    document.querySelector('.third').style.display = "none"

    document.querySelector('.about-msg').style.display = "block"
}