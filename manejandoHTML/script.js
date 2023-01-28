const
numero1 = document.querySelector('#numero1'),
numero2 = document.querySelector('#numero2'),
boton = document.querySelector('#button')
parrafo = document.querySelector('#result');
date=document.querySelector('#hola');


boton.addEventListener('click', sumar);

function sumar(){
    parrafo.innerText = 'La hora es: '+date.value+' El resultado de la suma es igual a: '+ (parseInt(numero1.value)+parseInt(numero2.value));

}


