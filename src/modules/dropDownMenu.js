'use strict';

const dropDownMenu = () => {
    const clubSelect = document.querySelector('.club-select');
    const ul = clubSelect.querySelector('ul');

    clubSelect.addEventListener('click', () => {
        if (ul.style.display !== 'block') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    });
};
export default dropDownMenu;