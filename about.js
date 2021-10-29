console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your input was successful!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const pictureCompliment = event => {
	event.preventDefault;
	alert('Why are you so beautiful');
}

// const removeAlert = evt => {
// 	evt.target.alert = function() {};
// }

let ducko = document.getElementById("ducko");

ducko.addEventListener('mouseover', pictureCompliment);
// ducko.addEventListener("mouseout", removeAlert);