"use strict";


(function() {

        var arr = [ 'Первая строка', 'Вторая строка', 'Третья строка' ],

            elem = document.getElementById( 'test' ), i = -1;

        return function() {

            if ( ++i < arr.length ) {

                elem.innerHTML += arr[ i ] + '<br>';

                //setTimeout( arguments.callee, 2000 );

            }

        }();

    })();
