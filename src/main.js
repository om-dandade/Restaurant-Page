import './styles/main.css';
import './styles/navBar.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/about.css';
import generateHomePage from './modules/homePage';
import generateMenuPage from './modules/menuPage';
import generateAboutPage from './modules/aboutPage';

const homeNavTab = document.querySelector('#homeNavTab');
const menuNavTab = document.querySelector('#menuNavTab');
const aboutNavTab = document.querySelector('#aboutNavTab');
const content = document.querySelector('.content');

content.innerHTML = generateHomePage();
let currentTab = homeNavTab;

const ChangeCurrentTab = (clickedTab) =>{
    currentTab.classList.remove('currentNavTab');
    currentTab = clickedTab;
    currentTab.classList.add('currentNavTab');
}

homeNavTab.addEventListener('click', () => {
    content.innerHTML = generateHomePage();
    document.body.classList.remove("menuBackground");
    document.body.classList.remove("aboutBackground");
    ChangeCurrentTab(homeNavTab);
});

menuNavTab.addEventListener('click', () => {
    content.innerHTML = generateMenuPage();
    document.body.classList.remove("aboutBackground");
    document.body.classList.add("menuBackground");
    ChangeCurrentTab(menuNavTab);
});

aboutNavTab.addEventListener('click', () => {
    content.innerHTML = generateAboutPage();
    document.body.classList.remove("menuBackground");
    document.body.classList.add("aboutBackground");
    ChangeCurrentTab(aboutNavTab);
});