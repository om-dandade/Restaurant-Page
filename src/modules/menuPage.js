import chickenParmisan from '/src/assets/images/chickenParmisan.jpg'
import lasagna from '/src/assets/images/lasagna.jpg'
import seafoodPaella from '/src/assets/images/seafoodPaella.jpg'
import soup from '/src/assets/images/soup.jpg'

const generateMenuPage = () => {
    return `
<div id="menuTopBar" class="topBar">
    <h1>Menu</h1>
</div>
<div class="centeredGridBox">
    <div class="foodItemCard">
        <h2 class="titleFont centeredText">Seafood Paella</h2>
        <div class="menuContent">
            <div>
                <p class="foodDescription">
                    Its a vibrant Spanish rice dish originating in Valencia, Spain. 
                    Its a flavorful combination of saffron-infused rice, seafood, 
                    and aromatic vegetables. The dish typically includes prawns, 
                    mussels, calamari (or squid), and sometimes clams. 
                </p>
                <h3 class="titleFont">2000 ₿</h3>
            </div>
            <img class="smallPageImage" src="${seafoodPaella}">
        </div>
    </div>
    <div class="foodItemCard">
        <h2 class="titleFont centeredText">Lasagna</h2>
        <div class="menuContent">
            <div>
                <p class="foodDescription">
                    Layers of pasta, rich meat sauce, creamy béchamel,
                    and melted cheese come together in this comforting
                    Italian classic. Dont forget the garlic bread on the side.
                </p>
                <h3 class="titleFont">1940 ₿</h3>
            </div>
            <img class="smallPageImage" src="${lasagna}">
        </div>
    </div>
    <div class="foodItemCard">
        <h2 class="titleFont centeredText">Chicken Parmesan</h2>
        <div class="menuContent">
            <div>
                <p class="foodDescription">
                    Tender chicken cutlets breaded and fried to perfection,
                    topped with marinara sauce and melted mozzarella cheese.
                    Served with a side of spaghetti or garlic bread.
                </p>
                <h3 class="titleFont">1700 ₿</h3>
            </div>
            <img class="smallPageImage" src="${chickenParmisan}">
        </div>
    </div>
    <div class="foodItemCard">
        <h2 class="titleFont centeredText">Quinoa Vegetable Soup with Kale</h2>
        <div class="menuContent">
            <div>
                <p class="foodDescription">
                    A gluten-free and vegan soup thats both nutritious
                    and filling. Quinoa, kale, and veggies come together
                    in a comforting bowl of goodness.
                </p>
                <h3 class="titleFont">1350 ₿</h3>
            </div>
            <img class="smallPageImage" src="${soup}">
        </div>
    </div>
</div>
    `;
};

export default generateMenuPage;