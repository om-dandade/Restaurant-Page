import './styles/main.css';
import generateHomePage from './modules/homePage';
import generateMenuPage from './modules/menuPage';
import generateAboutPage from './modules/aboutPage';

const homePage = generateHomePage();
document.body.appendChild(homePage);

const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const aboutButton = document.querySelector('#aboutButton');

homeButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    if(content)document.body.removeChild(content);
    const homePage = generateHomePage();
    document.body.appendChild(homePage);
});

menuButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    if(content)document.body.removeChild(content);
    const menuPage = generateMenuPage();
    document.body.appendChild(menuPage);
});

aboutButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    if(content)document.body.removeChild(content);
    const aboutPage = generateAboutPage();
    document.body.appendChild(aboutPage);
});