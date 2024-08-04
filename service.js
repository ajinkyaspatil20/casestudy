const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let isTransitioning = false;

function showItem(index) {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-index * 100}%)`;
}

function handleNext() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        showItem(currentIndex);
        setTimeout(() => {
            carouselSlide.style.transition = 'none';
            currentIndex = 0;
            carouselSlide.style.transform = `translateX(0)`;
            isTransitioning = false;
        }, 500);
    } else {
        showItem(currentIndex);
        setTimeout(() => (isTransitioning = false), 500);
    }
}

function handlePrev() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    if (currentIndex < 0) {
        carouselSlide.style.transition = 'none';
        currentIndex = carouselItems.length - 1;
        carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;
        setTimeout(() => {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
            showItem(currentIndex);
            isTransitioning = false;
        }, 0);
    } else {
        showItem(currentIndex);
        setTimeout(() => (isTransitioning = false), 500);
    }
}

nextButton.addEventListener('click', handleNext);
prevButton.addEventListener('click', handlePrev);