const generateHomePage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('content');
    homePage.innerHTML = `
    <h1>Welcome to The Baratie</h1>
    <h3>The Finest Floating Restaurant on the Grand Line!</h3>
    <p>Welcome aboard the Baratie, where the culinary dreams of the seas come to life! 
        Owned and operated by the legendary chef and former pirate, 
        Red-Leg Zeff, our restaurant is renowned for serving the most exquisite dishes 
        to seafarers from all corners of the world. Whether you're a pirate, marine, or a 
        wandering adventurer, a delectable dining experience awaits you at the Baratie.
    </p>
    <h2>Discover Baratie: A Culinary Haven on the High Seas</h2>
    <p>
        At Baratie, we offer more than just a meal. Our floating restaurant is a sanctuary 
        for those who seek adventure and fine dining. Here are some of the features that make 
        Baratie a unique dining destination:
    </p>
    <h3>Stunning Ocean Views</h3>
    <p>
        Enjoy panoramic views of the open sea from every seat in the house. 
        Our restaurant's design ensures that you can savor your meal while taking 
        in the breathtaking beauty of the ocean.
    </p>
    <h3>Live Cooking Shows</h3>
    <p>
        Witness the culinary magic of our chefs in real-time! With open kitchens and 
        live cooking shows, you can watch as your meal is prepared with skill and 
        precision by Sanji and our talented crew.
    </p>
    <h3>Nautical Ambiance</h3>
    <p>
        Experience the charm of the sea with our nautical-themed decor. 
        From the ship-like architecture to maritime artifacts, 
        every detail at Baratie is designed to transport you to a world of 
        nautical adventure.
    </p>
    <h3>Pirate-Friendly Environment</h3>
    <p>
        Baratie welcomes all guests, from marines to pirates. 
        Our inclusive and friendly atmosphere ensures that everyone 
        feels at home, regardless of their background or allegiance.
    </p>
    `;
    return homePage;
}

export default generateHomePage;