'use strict';

const scrolling = () => {
    try {
        let header = document.querySelector('header'),
            topMenu = header.querySelector('nav'),
            mozaika = document.getElementById('mozaika'),
            schelkovo = document.getElementById('schelkovo'),
            btnMenu = topMenu.querySelector('.menu-button'),
            img = btnMenu.querySelector('img'),
            popupMenu = header.querySelector('.popup-menu'),
            img1 = popupMenu.querySelector('img'),
            arrow = document.getElementById('totop');
        arrow.style.display = 'none';
        const sliding = (elem) => {
            if (elem.href === undefined) { return; }
            let elems = elem.href.split('#')[1];
            document.querySelector(`#` + elems).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        if (mozaika.parentNode.documentElement.clientWidth < 769) {
            img.addEventListener('click', () => {
                popupMenu.style.display = 'flex';
                popupMenu.addEventListener('click', (event) => {
                    let target = event.target;
                    if (target.tagName === 'A' && target.tagName !== 'IMG') {
                        event.preventDefault();
                        sliding(target);
                        popupMenu.style.display = 'none';

                    }
                    if (target.tagName === 'IMG') {
                        popupMenu.style.display = 'none';

                    }
                });
            });
        }
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 700) {
                arrow.style.display = 'block';
            } else {
                arrow.style.display = 'none';
            }
            if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > 120) {
                topMenu.style.position = 'fixed';
            } else {
                topMenu.style.position = '';

            }
        });
    } catch {
        try {
            let header = document.querySelector('header'),
                topMenu = header.querySelector('nav'),
                mozaika = document.getElementById('mozaika'),
                schelkovo = document.getElementById('schelkovo'),
                btnMenu = topMenu.querySelector('.menu-button'),
                img = btnMenu.querySelector('img'),
                popupMenu = header.querySelector('.popup-menu'),
                img1 = popupMenu.querySelector('img'),
                arrow = document.getElementById('totop');
            arrow.style.display = 'none';
            const sliding = (elem) => {
                if (elem.href === undefined) { return; }
                let elems = elem.href.split('#')[1];
                document.querySelector(`#` + elems).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            };

            if (schelkovo.parentNode.documentElement.clientWidth < 769) {
                img.addEventListener('click', () => {
                    popupMenu.style.display = 'flex';
                    popupMenu.addEventListener('click', (event) => {
                        let target = event.target;
                        if (target.tagName === 'A' && target.tagName !== 'IMG') {
                            event.preventDefault();
                            sliding(target);
                            popupMenu.style.display = 'none';

                        }
                        if (target.tagName === 'IMG') {
                            popupMenu.style.display = 'none';

                        }
                    });
                });
            }
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 700) {
                    arrow.style.display = 'block';
                } else {
                    arrow.style.display = 'none';
                }
                if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > 120) {
                    topMenu.style.position = 'fixed';
                } else {
                    topMenu.style.position = '';

                }
            });

        } catch {
            try {
                let header = document.querySelector('header'),
                    topMenu = header.querySelector('nav'),
                    mozaika = document.getElementById('mozaika'),
                    schelkovo = document.getElementById('schelkovo'),
                    btnMenu = topMenu.querySelector('.menu-button'),
                    img = btnMenu.querySelector('img'),
                    popupMenu = header.querySelector('.popup-menu'),
                    img1 = popupMenu.querySelector('img'),
                    arrow = document.getElementById('totop');
                arrow.style.display = 'none';
                const sliding = (elem) => {
                    if (elem.href === undefined) { return; }
                    let elems = elem.href.split('#')[1];
                    document.querySelector(`#` + elems).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                };

                if (document.documentElement.clientWidth < 769) {
                    img.addEventListener('click', () => {
                        popupMenu.style.display = 'flex';
                        popupMenu.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target.tagName === 'A' && target.tagName !== 'IMG') {
                                event.preventDefault();
                                sliding(target);
                                popupMenu.style.display = 'none';

                            }
                            if (target.tagName === 'IMG') {
                                popupMenu.style.display = 'none';

                            }
                        });
                    });
                }
                window.addEventListener('scroll', () => {
                    if (document.documentElement.scrollTop > 700) {
                        arrow.style.display = 'block';
                    } else {
                        arrow.style.display = 'none';
                    }
                    if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > 120) {
                        topMenu.style.position = 'fixed';
                    } else {
                        topMenu.style.position = '';

                    }
                });
            } catch { }
        }
    }
};

export default scrolling;
