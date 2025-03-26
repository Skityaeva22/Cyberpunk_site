const launchSlider = (sliderSelector) => {
    const sliders = document.querySelectorAll(sliderSelector);
    if (!sliders.length) return;

    let currentIndex = 0;

    const activateSlider = (index) => {
        sliders.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    function startSlider() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sliders.length;
            activateSlider(currentIndex);
        }, 3000);
    }

    activateSlider(currentIndex);
    startSlider();
}

document.addEventListener('DOMContentLoaded', () => {
    launchSlider('.slider_1');
    launchSlider('.slider_2_1');
    launchSlider('.slider_2_2');
    launchSlider('.slider_2_3');
});
