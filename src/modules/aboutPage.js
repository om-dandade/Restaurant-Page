const generateAboutPage = () => {
  const aboutPage = document.createElement('div');
  aboutPage.classList.add('content');
  aboutPage.innerHTML = `
    <h1>About Page</h1>
    <p>This is the about page</p>
  `;
  return aboutPage;
};

export default generateAboutPage;