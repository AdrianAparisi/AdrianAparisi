'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = true;
let operacion;
let operadores;
let operador1 = '';
let operador2 = '';
let salir = false;
let lastResult = 0;


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


    for (let i = 0; i < operadores.length; i++) {
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

let calculator = {
    sum(operadores) {
        let operador1 = Number(operadores[0]);
        let operador2 = Number(operadores[1]);
        resultado = operador1 + operador2;
        alert('El resultado es: ' + resultado());
        return resultado;
    },

    res(operadores) {
        let operador1 = Number(operadores[0]);
        let operador2 = Number(operadores[1]);
        resultado = operador1 - operador2;
        alert('El resultado es: ' + resultado());
        return resultado;
    },

    mul(operadores) {
        let operador1 = Number(operadores[0]);
        let operador2 = Number(operadores[1]);
        resultado = operador1 * operador2;
        alert('El resultado es: ' + resultado());
        return resultado;
    },

    div(operadores) {
        let operador1 = Number(operadores[0]);
        let operador2 = Number(operadores[1]);
        resultado = operador1 / operador2;
        alert('El resultado es: ' + resultado());
        return resultado;
    },
    lastResult
};

while (repeat) {
    pedirOperacion();
    let pedirOperadores = validar();

    while (!pedirOperadores) {
        pedirOperadores = validar();
    }
    let resultado;

    switch (operacion) {
        case '+':
            calculator.lastResult = calculator.sum(operadores);
            break;

        case '-':
            calculator.lastResult = calculator.res(operadores);
            break;

        case '*':
            calculator.lastResult = calculator.mul(operadores);
            break;

        case '/':
            calculator.lastResult = calculator.div(operadores);
            break;

    }

    repeat = confirm('Quieres realizar otra operación?');

}
operadores = validar();

console.log(operacion);