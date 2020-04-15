'use strict';





function DomElement(selector, height, width, bg, fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

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
    vfont-size:${this.fontSize}`);
    

};

DomElement.prototype.writeText = function(){

    let elem = document.querySelector(`${this.selector}`);
    elem.textContent = prompt('текст');
};

let element = new DomElement('.der', '500px', '500px', 'red', '100px');

element.makeElement();
element.cssText();
element.writeText();