import './styles/main.css';
import './styles/navBar.css';
import './styles/home.css';
import './styles/menu.css';
import generateHomePage from './modules/homePage';
import generateMenuPage from './modules/menuPage';
import generateAboutPage from './modules/aboutPage';

const homePage = generateHomePage();
document.body.appendChild(homePage);

const homeNavTab = document.querySelector('#homeNavTab');
const menuNavTab = document.querySelector('#menuNavTab');
const aboutNavTab = document.querySelector('#aboutNavTab');
let currentTab = homeNavTab;

const clearContent = () =>{
    const content = document.querySelector('.content');
    if(content)document.body.removeChild(content);
}
const ChangeCurrentTab = (clickedTab) =>{
    currentTab.classList.remove('currentNavTab');
    currentTab = clickedTab;
    currentTab.classList.add('currentNavTab');
}

homeNavTab.addEventListener('click', () => {
    clearContent();
    const homePage = generateHomePage();
    document.body.classList.remove("menuBackground");
    document.body.classList.remove("aboutBackground");
    document.body.appendChild(homePage);
    ChangeCurrentTab(homeNavTab);
});

menuNavTab.addEventListener('click', () => {
    clearContent();
    const menuPage = generateMenuPage();
    document.body.classList.remove("aboutBackground");
    document.body.classList.add("menuBackground");
    document.body.appendChild(menuPage);
    ChangeCurrentTab(menuNavTab);
});

aboutNavTab.addEventListener('click', () => {
    clearContent();
    const aboutPage = generateAboutPage();
    document.body.classList.remove("menuBackground");
    document.body.classList.add("aboutBackground");
    document.body.appendChild(aboutPage);
    ChangeCurrentTab(aboutNavTab);
});