'use strict';

const calc = () => {
    try {
        const cardOrder = document.getElementById('card_order'),
            cardLetoMozaika = document.getElementById('card_leto_mozaika'),
            priceTotal = document.getElementById('price-total'),
            price = document.querySelector('.price'),
            promo = price.querySelector('input'),
            inputs = cardOrder.querySelectorAll('input');
        priceTotal.textContent = '1999';
        promo.addEventListener('input', () => {
            if (promo.value === 'ТЕЛО2019') {
                let val = Number(priceTotal.textContent);
                priceTotal.textContent = Math.floor(val - val * 0.3);
            }
        });
        cardOrder.addEventListener('click', (event) => {
            let target = event.target;
            if (target.value === 'mozaika') {
                let elems = [...inputs].filter((item) => item.name === 'card-type');
                elems.forEach((elem) => {
                    if (elem.checked === true) {
                        if (elem.value === '1') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 1999);
                                priceTotal.textContent = `${1999 - value}`;
                            } else {
                                priceTotal.textContent = '1999';
                            }
                        }
                        if (elem.value === '6') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 9900);
                                priceTotal.textContent = `${9900 - value}`;
                            } else {
                                priceTotal.textContent = '9900';
                            }

                        }
                        if (elem.value === '9') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 13900);
                                priceTotal.textContent = `${13900 - value}`;
                            } else {
                                priceTotal.textContent = '13900';
                            }

                        }
                        if (elem.value === '12') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 19900);
                                priceTotal.textContent = `${19900 - value}`;
                            } else {
                                priceTotal.textContent = '19900';
                            }

                        }
                    }
                });
            }
            if (target.value === 'schelkovo') {
                let elems = [...inputs].filter((item) => item.name === 'card-type');
                elems.forEach((elem) => {
                    console.log(elem.checked === true);
                    if (elem.checked === true) {
                        if (elem.value === '1') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 2999);
                                priceTotal.textContent = `${2999 - value}`;
                            } else {
                                priceTotal.textContent = '2999';
                            }

                        }
                        if (elem.value === '6') {
                            if (promo.value === 'ТЕЛО') {
                                let value = Math.floor(0.3 * 14990);
                                priceTotal.textContent = `${14990 - value}`;
                            } else {
                                priceTotal.textContent = '14990';
                            }

                        }
                        if (elem.value === '9') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 21990);
                                priceTotal.textContent = `${21990 - value}`;
                            } else {
                                priceTotal.textContent = '21990';
                            }

                        }
                        if (elem.value === '12') {
                            if (promo.value === 'ТЕЛО2019') {
                                let value = Math.floor(0.3 * 24990);
                                priceTotal.textContent = `${24990 - value}`;
                            } else {
                                priceTotal.textContent = '24990';
                            }

                        }
                    }
                });
            }
            if (target.tagName === 'INPUT' && target.value === '1') {
                if (cardLetoMozaika.checked) {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 1999);
                        priceTotal.textContent = `${1999 - value}`;
                    } else {
                        priceTotal.textContent = '1999';
                    }

                } else {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 2999);
                        priceTotal.textContent = `${2999 - value}`;
                    } else {
                        priceTotal.textContent = '2999';
                    }
                }
            }
            if (target.tagName === 'INPUT' && target.value === '6') {
                if (cardLetoMozaika.checked) {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 9900);
                        priceTotal.textContent = `${9900 - value}`;
                    } else {
                        priceTotal.textContent = '9900';
                    }

                } else {
                    if (promo.value === 'ТЕЛО') {
                        let value = Math.floor(0.3 * 14990);
                        priceTotal.textContent = `${14990 - value}`;
                    } else {
                        priceTotal.textContent = '14990';
                    }
                }
            }
            if (target.tagName === 'INPUT' && target.value === '9') {
                if (cardLetoMozaika.checked) {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 13900);
                        priceTotal.textContent = `${13900 - value}`;
                    } else {
                        priceTotal.textContent = '13900';
                    }
                } else {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 21990);
                        priceTotal.textContent = `${21990 - value}`;
                    } else {
                        priceTotal.textContent = '21990';
                    }
                }
            }
            if (target.tagName === 'INPUT' && target.value === '12') {
                if (cardLetoMozaika.checked) {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 19900);
                        priceTotal.textContent = `${19900 - value}`;
                    } else {
                        priceTotal.textContent = '19900';
                    }
                } else {
                    if (promo.value === 'ТЕЛО2019') {
                        let value = Math.floor(0.3 * 24990);
                        priceTotal.textContent = `${24990 - value}`;
                    } else {
                        priceTotal.textContent = '24990';
                    }
                }
            }
        });
    } catch { }
};
export default calc;