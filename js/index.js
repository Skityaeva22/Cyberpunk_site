"use strict";

const launchSlider = (sliderSelector) => {
    const sliders = document.querySelectorAll(sliderSelector);
    if (!sliders.length) return;

    let currentIndex = 0;
    sliders[currentIndex].classList.add('active');

    function showSlide(index) {
        if (!sliders[currentIndex] || !sliders[index]) return;

        sliders[currentIndex].classList.remove('active');
        sliders[index].classList.add('active');
        currentIndex = index;
    }

    function startSlider() {
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % sliders.length;
            showSlide(nextIndex);
        }, 3000);
    }

    startSlider();
}

document.addEventListener('DOMContentLoaded', () => {
    launchSlider('.slider_1');
    launchSlider('.slider_2_1');
    launchSlider('.slider_2_2');
    launchSlider('.slider_2_3');
});
