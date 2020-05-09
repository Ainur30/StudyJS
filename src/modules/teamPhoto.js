"use strict";
// our team
const teamPhoto = () => {
    const img = document.querySelectorAll('.command__photo');
    img.forEach((elem) => {
        let photo;
        elem.addEventListener('mouseenter', (event) => {
            photo = event.target.src;
            event.target.src = event.target.dataset.img;

        });
        elem.addEventListener('mouseout', (event) => {

            event.target.src = photo;

        });
    });

};
export default teamPhoto;