
 

import '@babel/polyfill';
import 'formdata-polyfill';
import 'nodelist-foreach-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import mainDown from './modules/mainDown';
import tabs from './modules/tabs';
import slider from './modules/slider';
import teamPhoto from './modules/teamPhoto';
import checkInputs from './modules/checkInputs';
import calc from './modules/calc';
import sendForm from './modules/sendAjaxForm';

countTimer('13 may 2020');

toggleMenu();

togglePopUp();

mainDown();

tabs();

slider();

teamPhoto();

checkInputs();

calc();

sendForm();