document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    if (slides.length <= 1 ) {
        return;
    }

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }
    nextSlide();

    setInterval(nextSlide, 2000);
});