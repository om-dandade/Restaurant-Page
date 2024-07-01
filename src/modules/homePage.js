import baratieLogo from '/src/assets/images/baratieLogo.jpg'
import OcenView from '/src/assets/images/OcenView.jpg'
import sanji from '/src/assets/images/sanji.jpg'
import cooking from '/src/assets/images/cooking.jpg'
import sanjiWithSalt from '/src/assets/images/sanjiWithSalt.webp'
import pirateFriendly from '/src/assets/images/pirateFriendly.jpg'

const generateHomePage = () => {
    return `
<div class="topBar">
    <img id="baratieLogo" src="${baratieLogo}" />
    <div id="titleText">
        <h1 class="titleFont">Welcome to The Baratie</h1>
        <a class="subText">The Finest Floating Restaurant on the Grand Line!</a>
    </div>
</div>

<div class="centeredGridBox">
    <div class="smallWidthBox">
        <p class="centeredText">Welcome aboard the Baratie, where the culinary dreams of the seas come to life!
            Owned and operated by the legendary chef and former pirate,
            Red-Leg Zeff, our restaurant is renowned for serving the most exquisite dishes
            to seafarers from all corners of the world. Whether you're a pirate, marine, or a
            wandering adventurer, a delectable dining experience awaits you at the Baratie.
        </p>
    </div>

    <!-- Content -->

    <div>
        <h2 class="titleFont centeredText">Discover Baratie: A Culinary Haven on the High Seas</h2>
    </div>

    <div class="smallWidthBox">
        <p>
            At Baratie, we offer more than just a meal. Our floating restaurant is a sanctuary
            for those who seek adventure and fine dining. Here are some of the features that make
            Baratie a unique dining destination:
        </p>
    </div>
    <div class="smallWidthBox">
        <h2 class"titleFont">Stunning Ocean Views</h3>
    </div>
    <div class="smallWidthBox">
        <p class="alignLeft">
            Enjoy panoramic views of the open sea from every seat in the house.
            Our restaurant's design ensures that you can savor your meal while taking
            in the breathtaking beauty of the ocean.
        </p>
        <img class="smallPageImage" src="${OcenView}" />
    </div>
    <div class="smallWidthBox">
        <h2 class"titleFont">Sanji’s Culinary Symphony: A Bounty of Flavors from the Straw Hat Pirate</h3>
    </div>
    <div class="smallWidthBox">
        <img class="pageImage" src="${sanji}" />
        <div class="alignRight">
            <p>
                the world-renowned chef Sanji orchestrates a culinary masterpiece. 
                His knives dance like pirates on stormy seas, slicing through fresh 
                ingredients with precision. From savory seafood to fiery spices, every 
                dish is an adventure—a bounty of flavors that tantalize the taste buds and defy the ordinary.
            </p>
            <p>
                Sanji’s Bounty: A staggering 1,032,000,000 berries! But his true treasure lies in the kitchen, 
                where he weaves magic with his hands. Whether it’s a simple bowl of ramen or a gourmet feast fit 
                for emperors, Sanji’s cooking transcends mere sustenance. It’s an art form—an ode to the sea, the 
                wind, and the camaraderie of pirates
            </p>
        </div>

    </div>
    <div class="smallWidthBox">
        <h2 class"titleFont">Live Cooking Shows</h3>
    </div>
    <div class="smallWidthBox">
        <p class="alignLeft">
            Witness the culinary magic of our chefs in real-time! With open kitchens and
            live cooking shows, you can watch as your meal is prepared with skill and
            precision by Sanji and our talented crew.
        </p>
        <img class="pageImage" src="${sanjiWithSalt}" />
        <img class="pageImage" src="${cooking}" />
    </div>
    <div class="smallWidthBox">
        <h2 class"titleFont">Pirate-Friendly Environment</h3>
    </div>
    <div class="smallWidthBox">
        <img class="pageImage" src="${pirateFriendly}" />
        <p class="alignRight">
            Baratie welcomes all guests, from marines to pirates.
            Our inclusive and friendly atmosphere ensures that everyone
            feels at home, regardless of their background or allegiance.
        </p>
    </div>
</div>
    `;
}

export default generateHomePage;