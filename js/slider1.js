"use strict";

const images = document.querySelectorAll('.slider_1_image');
let imageIndex = 0;

// Добавляем класс active первому изображению
images[0].classList.add('active');

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

function slider_loop() {
    setTimeout(function () {
        let nextIndex = (imageIndex + 1) % images.length;
        show(nextIndex);
        slider_loop();
    }, 5000);
}

slider_loop();
