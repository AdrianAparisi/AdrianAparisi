'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = true;
let operacion;
let operadores;
let operador1 = '';
let operador2 = '';
let salir = false;


function pedirOperacion() {
    while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
        operacion = prompt("¿Que operación quieres realizar? ( +, -, * o /.)");
        operacion = operacion.trim();

        if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') {

        } else {
            alert("No es un operando válido...")
        }
    }
}

function validar() {
    operador1 = "";
    operador2 = "";
    let operadores = prompt('Introduce los numeros separados por espacio', '');

    let i = 0;
    for (; i < operadores.length; i++) {
        if (operadores[i] !== ' ') {
            operador1 += operadores[i];
        } else {
            if (operador1 !== '') {
                break;
            }
        }
    }

    console.log(operador1);

    for (; i < operadores.length; i++) {
        if (operadores[i] !== ' ') {
            operador2 += operadores[i];
        } else {
            if (operador2 !== '') {
                break;
            }
        }
    }
    console.log(operador2);

    operador1 = Number(operador1);
    operador2 = Number(operador2);

    if (isNaN(operador1) || isNaN(operador2)) {
        alert('Tienes que introducir números.')
        return false;
    } else {
        return true;
    }
}

while (repeat) {
    pedirOperacion();
    let pedirOperadores = validar();

    while (!pedirOperadores) {
        pedirOperadores = validar();
    }
    let resultado;

    switch (operacion) {

        case '+':
            resultado = () => parseInt(operador1 + operador2);
            alert('El resultado es: ' + resultado());
            break;

        case '-':
            resultado = () => parseInt(operador1 - operador2);
            alert('El resultado es: ' + resultado());
            break;

        case '*':
            resultado = () => parseInt(operador1 * operador2);
            alert('El resultado es: ' + resultado());
            break;

        case '/':
            resultado = () => parseInt(operador1 / operador2);
            alert('El resultado es: ' + resultado());
            break;

    }

    repeat = confirm('Quieres realizar otra operación?');

}

console.log(operacion);