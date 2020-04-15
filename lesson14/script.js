'use strict';

function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.left = 0;
    this.right = 0;
    this.top = 0;
    this.down = 0;
    

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
    vfont-size:${this.fontSize};position:absolute;margin:0;`);
    

};

DomElement.prototype.writeText = function(){

    let elem = document.querySelector(`${this.selector}`);
    elem.textContent = prompt('текст');

};

DomElement.prototype.moveSquare = function(event){

    let elem = document.querySelector(`${this.selector}`);
    
    if ( event.key === 'ArrowRight'){

        elem.style.left = this.left + 'px';
        this.left += 10;

    }
    if ( event.key === 'ArrowLeft'){
        console.log('left');
        
        elem.style.left = this.left + 'px';
        this.left -= 10;

    }
    if ( event.key === 'ArrowUp'){
       
        elem.style.top = this.top + 'px';
        this.top -= 10;

    }
    if ( event.key === 'ArrowDown'){

        elem.style.top = this.top + 'px';
        this.top += 10;

    }

};

let element = new DomElement('.der', '100px', '100px', 'red', '100px');

element.makeElement();

element.cssText();
element.writeText();
document.addEventListener('keydown', element.moveSquare.bind(element));
document.addEventListener("DOMContentLoaded", DomElement);
