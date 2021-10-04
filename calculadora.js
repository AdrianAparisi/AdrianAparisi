'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = true;
let operacion;

do {
    operacion = prompt("¿Que operación quieres realizar? +, -, * o /.");
    operacion = operacion.trim();


    if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') {
        let operador1 = '';
        let operador2 = '';
        let salir = false;

        while (!salir) {
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
                alert('Tienes que introducir números')
                salir = false;
            } else {
                salir = true;
            }
        }
        let resultado;
        switch (operacion) {
            case '+':
                resultado = operador1 + operador2;
                break;

            case '-':
                resultado = operador1 - operador2;
                break;

            case '*':
                resultado = operador1 * operador2;
                break;

            case '/':
                resultado = operador1 / operador2;
                break;

        }
        alert('El resultado es:' + resultado)
        repeat = confirm('Quieres realizar otra operación?');

    } else {
        alert('La operación introducida es errónea. Prueba de nuevo.')
    }
} while ((operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') || repeat)

console.log(operacion);