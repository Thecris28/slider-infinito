const logos = document.querySelector('.slider__logos').cloneNode(true);
const logo = document.querySelector('.slider__logo').cloneNode(true);

const slider = document.querySelectorAll('.slider');

slider[0].appendChild(logos);
slider[1].appendChild(logo)