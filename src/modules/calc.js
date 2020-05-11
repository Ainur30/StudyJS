    "use strict";
    //calculator

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        let interval;

        const countSum = () => {
            let total = 0,
                countValue = 1,
                counter = 0,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
           
            const getTotal = () => {
                interval = requestAnimationFrame(getTotal);
                counter += 50;
                totalValue.textContent = counter;
                if (counter >= total) {
                    totalValue.textContent = Math.ceil(total);
                   cancelAnimationFrame(interval);
                }
            };
            if (total > 0) {
                interval = requestAnimationFrame(getTotal);
            }
        };
        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                cancelAnimationFrame(interval);
                countSum();
            }
        });
    };
    export default calc;