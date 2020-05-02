class Validator{
    constructor({selector, pattern, method}){
        this.selector = selector;
        this.pattern = pattern;
        this.method = method;
    }

    init(){
        alert(this.selector);
    }

    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterEnd', errorDiv);
    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSiblining.classList.contains('validator-error')){
            elem.nextElementSiblining.remove();
        }
    }

    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green
            }
            input.error {
                border: 2px solid red
            }
            validator-error {
                font-size: 14px;
                color: red;

            }
        `;
    }
}