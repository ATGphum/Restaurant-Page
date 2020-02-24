import { loadScreen } from './pageload.js'
import { loadMenu } from './menu.js'
import { loadExperience } from './experience.js'
import { loadContact } from './contact.js'

loadScreen();

function displayContent() {
    const menu = document.querySelector('#menu'); 
    menu.addEventListener('click', () => loadMenu());
    const experience = document.querySelector('#experience'); 
    experience.addEventListener('click', () => {loadExperience(), 
        const menulink = document.querySelector('#menulink'); 
        menulink.addEventListener('click', () => loadMenu());});
    const contact = document.querySelector('#contact');
    contact.addEventListener('click', () => {loadContact(), 
        const alacarte = document.querySelector('#alacarte');
        alacarte.addEventListener('click', () => loadMenu());
    );
}


displayContent();
