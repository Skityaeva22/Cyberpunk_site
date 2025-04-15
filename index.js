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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    const closeModal = document.getElementById('closeModal');

    document.getElementById('moreInfoBtn').addEventListener('click', () => {
        modalText.textContent = 'Информации нет :)';
        modal.style.display = 'flex';
    });

    document.getElementById('privacyPolicyBtn').addEventListener('click', async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            const randomUser = users[Math.floor(Math.random() * users.length)];

            modalText.innerHTML = `
                Данные 
                <strong>${randomUser.name}</strong>:<br>
                Email: ${randomUser.email}<br>
                Phone: ${randomUser.phone}<br>
                Website: ${randomUser.website}
            `;
            modal.style.display = 'flex';
        } catch (err) {
            modalText.textContent = 'Ошибка загрузки данных';
            modal.style.display = 'flex';
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
