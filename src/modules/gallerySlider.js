"use strict";

const gallerySlider = () =>{
    const slide = document.querySelectorAll('.photo-item'),
        container = document.querySelector('.contain');


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        let currentSlide = 0,
            interval;
    
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'item-active');
            
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'item-active');
           
        };
    
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
    
        };
    
        const stopSlide = () => {
            clearInterval(interval);
        };
        container.addEventListener('mouseover', (event) => {
            if (event.target.matches('.port') || event.target.matches('.dot')) {
                stopSlide();
            }
    
        });
        container.addEventListener('mouseout', (event) => {
            if (event.target.matches('.port') || event.target.matches('.dot')) {
                startSlide(1000);
            }
    
        });
    
        container.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
    
            if (!target.matches('.port, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'item-active');
           
    
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } 
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'item-active');
            
        });
    
        startSlide(10000);
    };
export default gallerySlider;
