'use strict';

const sliderCarousel = () => {
    const services = document.getElementById('services'),
        prev = services.querySelector('.prev'),
        next = services.querySelector('.next'),
        sliders = services.querySelector('.services-slider'),
        slider = services.querySelector('.services-slider').children;
    let position = 0;
    for(let el of slider){
        el.setAttribute('style', 'flex:0 0 20%; margin:0 auto !important;');
    }
    const prevSlider = ()=>{
        if(position > 0){
            --position;
            sliders.style.transform = `translateX(-${position*20}%)`;
        }
    };
    const nextSlider = () => {
        if(position < 5){
            ++position;
            sliders.style.transform = `translateX(-${position*20}%)`;
        }
    };
    next.addEventListener('click', nextSlider);
    prev.addEventListener('click', prevSlider);
};
export default sliderCarousel;