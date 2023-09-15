class Recursividad {
    calcularFactorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        }
        return numero * this.calcularFactorial(numero - 1);
    }

    calcularFibonacci(n) {
        if (n <= 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.calcularFibonacci(n - 1) + this.calcularFibonacci(n - 2);
        }
    }

    calcularMCD(a, b) {
        if (b === 0) {
            return a;
        } else {
            return this.calcularMCD(b, a % b);
        }
    }
}

const type_recursivity = document.getElementById('type_recursivity');
const input_container = document.getElementById('input_container');
const calculate_button = document.getElementById('calculate_button');
const results_operations = document.getElementById('results_operations');

//Los cambios de operaciones
type_recursivity.addEventListener('change', () =>{
    results_operations.innerHTML = ` `;

    const recursivity_type = type_recursivity.value;

    if(recursivity_type == 'Factoreal'){
        input_container.innerHTML = `
        <label for="NumeroF">A que numero le quieres sacar su factoreal:</label><br>
        <input type="text" name="NumeroF" id="NumeroF">
        `;
    } else if(recursivity_type == 'Fibonacci') {
        input_container.innerHTML = `
        <label for="NumeroFibo">Ingresa el numero al cual le quieres sacar su pocision fibonacci:</label><br>
        <input type="text" name="NumeroFibo" id="NumeroFibo">
        `;
    } else if (recursivity_type == 'MCD'){
        input_container.innerHTML =  `
        <label for="N1MCD">Ingresa el primer numero</label><br/>
        <input type="text" name="N1MCD" id="N1MCD"><br/>
        <label for="N2MCD">Ingresa el segundo numero</label><br>
        <input type="text" name="N2MCD" id="N2MCD">
        `;
    }
})

calculate_button.addEventListener("click", () => {
    const recursivity_type = type_recursivity.value;
    const createElement = document.createElement('p');
    

    if(recursivity_type == 'Factoreal'){
        const numeroF = document.getElementById("NumeroF").value;
        const recursividad = new Recursividad();
        const respuestaF = recursividad.calcularFactorial(parseInt(numeroF))
        createElement.textContent = `El factoreal del numero: ${numeroF}, es: ${respuestaF}`;
    } else if(recursivity_type == 'Fibonacci'){
        const NumeroFibo = document.getElementById("NumeroFibo").value;
        const recursividad = new Recursividad();
        const RespuestaFibo = recursividad.calcularFibonacci(parseInt(NumeroFibo));
        createElement.textContent = `El numero fibonacci: ${NumeroFibo}, es: ${RespuestaFibo}`
    } else if( recursivity_type == 'MCD'){
        const NumeroN1MCD = document.getElementById('N1MCD').value;
        const NumeroN2MCD = document.getElementById('N2MCD').value;
        const recursividad = new Recursividad();
        const resuestaMCD = recursividad.calcularMCD(parseInt(NumeroN1MCD), parseInt((NumeroN2MCD)));
        createElement.textContent = `El MCD de los numero: ${NumeroN1MCD} y ${NumeroN2MCD} es: ${resuestaMCD}`;
    }
    results_operations.innerHTML = " ";
    results_operations.appendChild(createElement);
    
})






































// const recursividad = new Recursividad();

// //Factorial
// const numeroFactorial = 3;
// const factorial = recursividad.calcularFactorial(numeroFactorial);
// console.log(`El factorial de ${numeroFactorial} es ${factorial}`);

// //Fibonacci
// const posicionFibonacci = 5;
// const fibonacci = recursividad.calcularFibonacci(posicionFibonacci);
// console.log(`El número Fibonacci en la posición ${posicionFibonacci} es ${fibonacci}`);

// // Maximo comun divisor
// const numero1 = 12;
// const numero2 = 67;
// const mcd = recursividad.calcularMCD(numero1, numero2);
// console.log(`El MCD de ${numero1} y ${numero2} es ${mcd}`);

