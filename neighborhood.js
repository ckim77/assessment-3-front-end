let recommendBtn = document.getElementById("restaurant-button");
let restArray = ['Pho Plus', 'Bombay House', 'J Dawgs', 'The Wash', 'In n Out']



const recommendRestaurant = () => {
    let random = Math.floor(Math.random() * restArray.length);
    alert((random, restArray[random]));
}

recommendBtn.addEventListener('click',recommendRestaurant);

