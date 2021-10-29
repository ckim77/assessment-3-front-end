let recommendBtn = document.getElementById("restaurant-button");
let restArray = ['Pho Plus', 'Bombay House', 'J Dawgs', 'The Wash', 'In n Out']
const restaurantInfo = document.querySelector(".restaurant-info");


const recommendRestaurant = (evt) => {
    evt.preventDefault();
    let random = Math.floor(Math.random() * restArray.length);
    restaurantInfo.textContent = restArray[random];
    // alert((random, restArray[random]));
}



recommendBtn.addEventListener('click',recommendRestaurant);

