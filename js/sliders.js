"use strict";

// Функция для инициализации слайдера
function initializeSlider(sliderSelector) {
    const slides = document.querySelectorAll(sliderSelector);
    if (slides.length === 0) return; // Если слайдов нет, выходим из функции

    let currentIndex = 0;
    slides[currentIndex].classList.add('active');

    function showSlide(index) {
        if (!slides[currentIndex] || !slides[index]) return; // Проверка на undefined

        slides[currentIndex].classList.remove('active');
        slides[index].classList.add('active');
        currentIndex = index;
    }

    function startSlider() {
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, 5000);
    }

    startSlider();
}

// Запускаем слайдеры после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('.slider_1_image');
    initializeSlider('.slider_2_1_image');
    initializeSlider('.slider_2_2_image');
    initializeSlider('.slider_2_3_image');
});
