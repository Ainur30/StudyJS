"use strict";

const gallerySlider = () => {
    const slide = document.querySelectorAll('.photo-item'),
        dotsCont = document.querySelectorAll,
        container = document.querySelector('.contain');



    let dot = document.querySelectorAll('.dot');
    dot[0].classList.add('active');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    let currentSlide = 0,
        interval;

    container.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.port, .dot')) {
            return;
        }
        prevSlide(slide, currentSlide, 'item-active');
        prevSlide(dot, currentSlide, 'active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (target === elem) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'item-active');
        nextSlide(dot, currentSlide, 'active');
    });
};
export default gallerySlider;
