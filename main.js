'use strict'

let container = document.querySelector('.container-camadas');
let camada = document.querySelectorAll('.camada');

container.onmousemove = function(e) {
    let X = e.pageX;
    let Y = e.pageY;

    camada[0].style.transform = 'translate('+ X/100*-7 +'px, '+ Y/100*-7 +'px)';
    camada[1].style.transform = 'translate('+ X/100*-6 +'px, '+ Y/100*-6 +'px)';
    camada[2].style.transform = 'translate('+ X/100*-3 +'px, '+ Y/100*-3 +'px)';
    camada[3].style.transform = 'translate('+ X/100*-1 +'px, '+ Y/100*-1 +'px)';
    camada[4].style.transform = 'translate('+ X/100*4 +'px, '+ Y/100*4 +'px)';
    camada[5].style.transform = 'translate('+ X/100*7 +'px, '+ Y/100*7 +'px)';
    camada[6].style.transform = 'translate('+ X/100*11 +'px, '+ Y/100*11 +'px)';
}