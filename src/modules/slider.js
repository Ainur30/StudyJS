'use strict';

const slider = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide');

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };
    let currentSlide = 0,
    interval;

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
       
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);

    };
    startSlide(2000);
};

export default slider();