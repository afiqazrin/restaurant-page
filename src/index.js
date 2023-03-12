import { initContentDiv } from "./init";
import { createHomeDiv } from "./home";
import { createMenuDiv } from "./menu";
import { createContactDiv } from "./contact";
const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const contactButton = document.getElementById('contact-btn');

createHomeDiv();

homeButton.addEventListener('click', ()=> {
    initContentDiv();
    createHomeDiv();
});

menuButton.addEventListener('click', ()=> {
    console.log('hello');
    initContentDiv();
    createMenuDiv();
})

contactButton.addEventListener('click', ()=> {
    initContentDiv();
    createContactDiv();
})