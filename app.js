/**
 * Toggle Switch
 */
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('toggle-inactive');
});


/**
 * Slider Value event listener
 * - use value from slider and display on price
 * - increase / decrease color bar length
 */
const slider = document.querySelector('.slider');
const price = document.querySelector('#price');
const sliderColor = document.querySelector('.slider-bg-color');

slider.addEventListener('input', (e) => {
    price.innerText = `${e.target.value}.00`;

    let sliderWidth = parseInt((e.target.value / 50) * 100);
    sliderColor.style.width = `${sliderWidth}%`;
});

/**
 * Mouse down: change to lighter color when active
 * Mouse up: change color back to normal
 */
slider.addEventListener('mousedown', (e) => {
    sliderColor.style.backgroundColor = 'hsl(174, 76%, 80%)';
});
slider.addEventListener('mouseup', (e) => {
    sliderColor.style.backgroundColor = 'hsl(174, 86%, 45%)';
});