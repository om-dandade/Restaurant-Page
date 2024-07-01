

const generateAboutPage = () => {
  return `
<div id="aboutTopBar" class="topBar">
    <h1>About Page</h1>
</div>
    
<div class="centeredGridBox">
    <div class="aboutInfoCard">
        <h2 class="titleFont centeredText">Our Story</h2>
        <p class="centeredText">
          The Baratie was born from a promise, a promise made by Captain Zeff to a
          starving young pirate named Sanji. After surviving a shipwreck and sharing 
          their last morsels of food, Zeff vowed to create a haven for hungry souls. 
          And so, the Baratie set sail, a sanctuary where flavors collide, and stories unfold.
        </p>
        <h2 class="titleFont centeredText">Meet Our Crew</h2>
        <h5 class="titleFont centeredText">Captain Zeff</h5>
        <p class="centeredText">
          Our fearless leader, Captain Zeff, is a culinary visionary. 
          His passion for food knows no bounds, and his kitchen is his battlefield. 
          With an eyepatch and a ladle, he orchestrates symphonies of taste, infusing 
          each dish with love and adventure.
        </p>
        <h5 class="titleFont centeredText">Chef Sanji</h5>
        <p class="centeredText">
          Ah, Chef Sanji—the heart and soul of the Baratie. 
          A member of the legendary Straw Hat Pirates, Sanji’s bounty may be sky-high, 
          but his true treasure lies in his cooking. From crispy tempura to delicate pastries, 
          he dances between flames and flavors, leaving patrons spellbound.
        </p>
        <h2></h2>
        <h2 class="titleFont centeredText">Join Us</h2>
        <p class="centeredText">
          Whether you’re seeking refuge from a storm or celebrating a victory,
          the Baratie welcomes you. Come aboard, raise your glass, and let the 
          flavors of the Grand Line carry you away.
        </p>
        <p class="centeredText">
          Bon appétit, fellow adventurers! 🏴‍☠️🌊🍽️
        </p>
    </div>
</div>
  `;
};

export default generateAboutPage;