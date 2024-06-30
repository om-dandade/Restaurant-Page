

const generateAboutPage = () => {
  const aboutPage = document.createElement('div');
  aboutPage.classList.add('content');
  aboutPage.innerHTML = `
<div id="aboutTopBar" class="topBar">
    <h1>About Page</h1>
</div>
    
<div class="smallWidthBox">
    <p class="centeredText">This is aboutPage</p>
</div>
  `;
  return aboutPage;
};

export default generateAboutPage;