'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = true;
let operacion;
let operadores;
let operador1 = '';
let operador2 = '';
let salir = false;


function pedirOperacion(operacion) {
    operacion = prompt("¿Que operación quieres realizar? +, -, * o /.");
    operacion = operacion.trim();

    if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') {
        salir = false;
    } else {
        alert('La operación introducida es errónea. Prueba de nuevo.')
        salir = true;
    }
    return operacion;
}

do {
    operacion = pedirOperacion(operacion);

        /*let pedirOperadores = function(operadores){
         
        }*/

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
                alert('Tienes que introducir números.')
                salir = false;
            } else {
                salir = true;
            }
        }
        let resultado;

        let sum = (operador1, operador2) => {
            parseInt(operador1, operador1);
            resultado = operador1 + operador2;
            return resultado;
        };

        let res = (operador1, operador2) => {
            parseInt(operador1, operador1);
            resultado = operador1 - operador2;
            return resultado;
        };

        let mult = (operador1, operador2) => {
            parseInt(operador1, operador1);
            resultado = operador1 * operador2;
            return resultado;
        };

        let div = (operador1, operador2) => {
            parseInt(operador1, operador1);
            resultado = operador1 / operador2;
            return resultado;
        };

        switch (operacion) {

            case '+':
                sum(operador1, operador2);
                alert('El resultado es:' + resultado);
                break;

            case '-':
                res(operador1, operador2);
                alert('El resultado es:' + resultado);
                break;

            case '*':
                mult(operador1, operador2);
                alert('El resultado es:' + resultado);
                break;

            case '/':
                div(operador1, operador2);
                alert('El resultado es:' + resultado);
                break;

        }
        
        repeat = confirm('Quieres realizar otra operación?');

} while (repeat)

console.log(operacion);