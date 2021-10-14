'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = false;
let operacion;
let operadores;
let operador1 = '';
let operador2 = '';
let lastResult;
let Calculator = new Object();

Calculator = {
    sum() {
        lastResult = operador1 + operador2;
        alert('El resultado de la suma es: ' + lastResult);
    },

    res() {
        lastResult = operador1 - operador2;
        alert('El resultado de la resta es: ' + lastResult);
    },


    mul() {
        lastResult = operador1 * operador2;
        alert('El resultado de la multiplicacion es: ' + lastResult);
    },

    div() {
        lastResult = operador1 / operador2;
        alert('El resultado es de la división es: ' + lastResult);
    },

};

do {
    pedirOperacion();
    validar();

    switch (operacion) {
        case '+':
            Calculator.sum();
            break;

        case '-':
            Calculator.res();
            break;

        case '*':
            Calculator.mul();
            break;

        case '/':
            Calculator.div();
            break;

    }
    repeat = confirm('Quieres realizar otra operación?');
} while ((operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') || repeat);


function pedirOperacion() {
    let operandoValido = false;

    while (!operandoValido) {
        operacion = prompt("¿Que operación quieres realizar? ( +, -, * o /.)");
        operacion = operacion.trim();

        if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
            alert("No es un operando válido...")
            operandoValido = false;
        } else {
            operandoValido = true;
        }
    }
}


function validar() {
    operador1 = '';
    operador2 = '';
    let exit = false;

    while (!exit) {
        let operadores = prompt('Introduce los numeros separados por espacio', '');

        let i = 0;
        for (; i < operadores.length; i++) {
            if (operadores[i] === 'r' || operadores[i] === 'R') {
                operador1 = lastResult;
                break;
            }
            if (operadores[i] !== ' ') {
                operador1 += operadores[i];
            } else {
                if (operador1 !== '') {
                    break;
                }
            }
        } i++;

        console.log(operador1);

        for (; i < operadores.length; i++) {
            if (operadores[i] === 'r' || operadores[i] === 'R') {
                operador2 = lastResult;
                break;
            }
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
            exit = false;
        } else {
            exit = true;
        }
    }
    console.log(operacion);
}