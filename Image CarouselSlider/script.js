document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        carouselImages.style.transform = `translateX(${-currentIndex * 600}px)`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    setInterval(showNextImage, 3000);
});