'use strict';

function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.left = 10;

}

DomElement.prototype.makeElement = function(){

    if (this.selector[0] === '.'){

       let elem = document.createElement('div');
       let body = document.querySelector('body');
       elem.classList.add(`${this.selector.slice(1)}`);
       body.append(elem);

    } else if (this.selector[0] === '#'){

        let elem = document.createElement('p');
        let body = document.querySelector('body');
        elem.setAttribute('id', `${this.selector.slice(1)}`);
        body.append(elem);

    }

};

DomElement.prototype.cssText = function(){

    let elem = document.querySelector(`${this.selector}`);
   
    elem.setAttribute(`style`, `height:${this.height};width:${this.width};background:${this.bg};
    vfont-size:${this.fontSize};position:absolute;`);
    

};

DomElement.prototype.writeText = function(){

    let elem = document.querySelector(`${this.selector}`);
    console.log(elem);
    elem.textContent = prompt('текст');

};

DomElement.prototype.moveSquare = function(event){

    let elem = document.querySelector(`${this.selector}`);
    
    if ( event.key === 'ArrowRigth'){

        elem.style.left = this.left + 'px';
        this.left += 10;

    }

};

let element = new DomElement('.der', '100px', '100px', 'red', '100px');

element.makeElement();

element.cssText();
element.writeText();
document.addEventListener('keydown', element.moveSquare);
document.addEventListener("DOMContentLoaded", DomElement);
