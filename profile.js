let faveColor = document.getElementById('color');
let favePlace = document.getElementById('place');
let faveRitual = document.getElementById('ritual');

const alertColor = evt => {
	evt.preventDefault();
    alert('Black');
}

const alertPlace = evt => {
	evt.preventDefault();
    alert('DevMountain');
}

const alertRitual = evt => {
	evt.preventDefault();
    alert('Blood sacrifice to Diablo');
}

faveColor.addEventListener('click', alertColor);
favePlace.addEventListener('click', alertPlace);
faveRitual.addEventListener('click', alertRitual);