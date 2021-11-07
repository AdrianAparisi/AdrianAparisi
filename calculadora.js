'use strict'

alert("Hola usuario, bienvenido a la calculadora.")
let repeat = false;
let operacion;
let operadores;
let operador1 = '';
let operador2 = '';

class ErrorOperacion extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorOperacion";
    }
}
class ErrorOperador extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorOperador";
    }
}

class Calculator {
    lastResult = 0;

    sum(op1, op2) {
        this.lastResult = op1 + op2;
        alert('El resultado de la suma es: ' + this.lastResult);
    };

    res(op1, op2) {
        this.lastResult = op1 - op2;
        alert('El resultado de la resta es: ' + this.lastResult);
    };

    mul(op1, op2) {
        this.lastResult = op1 * op2;
        alert('El resultado de la multiplicacion es: ' + this.lastResult);
    };

    div(op1, op2) {
        this.lastResult = op1 / op2;
        alert('El resultado es de la división es: ' + this.lastResult);
    };
}

let calc = new Calculator();

do {
    pedirOperacion();
    validar();

    switch (operacion) {
        case '+':
            calc.sum(operador1, operador2);
            break;

        case '-':
            calc.res(operador1, operador2);
            break;

        case '*':
            calc.mul(operador1, operador2);
            break;

        case '/':
            calc.div(operador1, operador2);
            break;

    }
    repeat = confirm('Quieres realizar otra operación?');
} while ((operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') || repeat);


function pedirOperacion() {
    try {
        let operandoValido = false;
        while (!operandoValido) {
            operacion = prompt("¿Que operación quieres realizar? ( +, -, * o /.)");
            operacion = operacion.trim();

            if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
                operandoValido = false;
                throw new ErrorOperacion("La operación introducida es incorrecta...")
            } else {
                operandoValido = true;
            }
        }
    } catch (error) {
        if (error.name === "ErrorOperacion") {
            alert(error.message);
            pedirOperacion();
        }
    }
}


function validar() {
    try {
        operador1 = '';
        operador2 = '';
        let exit = false;

        while (!exit) {
            let operadores = prompt('Introduce los numeros separados por espacio', '');

            let i = 0;
            for (; i < operadores.length; i++) {
                if (operadores[i] === 'r' || operadores[i] === 'R') {
                    operador1 = calc.lastResult;
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
                    operador2 = calc.lastResult;
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
                exit = false;
                throw new ErrorOperador ('Introduce numeros...');
            } else {
                exit = true;
            }
        }
    } catch (error){
        if (error.name === "ErrorOperador") {
            alert(error.message);
            return validar();
        }
    }
    console.log(operacion);
}