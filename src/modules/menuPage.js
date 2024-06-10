const generateMenuPage = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('content');
    menuPage.innerHTML = `
        <h1>Menu</h1>
        `;

    return menuPage;
};

export default generateMenuPage;