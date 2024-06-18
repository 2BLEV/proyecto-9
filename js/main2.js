document.getElementById("Form_pesoIdeal").addEventListener("submit", function (event) { 
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    // Código de cálculo del peso ideal y del IMC

    // Declaración y captura de variables
    const sexo = document.getElementById("sexo").value; // Obtener el valor seleccionado del campo sexo
    const edad = document.getElementById("edad").value; // Obtener el valor ingresado en el campo edad
    const pesoActual = parseFloat(document.getElementById("pesoActual").value); // Obtener el valor ingresado en el campo peso actual y convertirlo a número flotante
    const altura = parseFloat(document.getElementById("altura").value); // Obtener el valor ingresado en el campo altura y convertirlo a número flotante
    let pesoIdeal, diferenciaPeso, mensajeImc, imc; // Declaración de variables para el resultado

    console.log("Sexo: ",sexo,"Edad:", edad, "Peso Actual: ", pesoActual,"Altura: ", altura); // Mostrar los valores obtenidos en la consola

    // Calcular el Índice de Masa Corporal (IMC)
    imc = pesoActual * (10000) / (altura * altura); // Fórmula para calcular el IMC
    console.log(imc); // Mostrar el IMC en la consola

    // Determinar el mensaje del IMC según el valor calculado
    if (imc < 18.5) {
        mensajeImc = "<span class='badge rounded-pill text-bg-info' > Bajo peso </span>"; // Mensaje para bajo peso
    } else if (imc >= 18.5 && imc < 24.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-primary' > Normal </span>"; // Mensaje para peso normal
    } else if (imc >= 25 && imc < 29.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-success' > Sobrepeso </span>"; // Mensaje para sobrepeso
    } else if (imc >= 30 && imc < 34.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-warning' > Obesidad tipo 1 </span>"; // Mensaje para obesidad tipo 1
    } else if (imc >= 35 && imc < 39.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 2 </span>"; // Mensaje para obesidad tipo 2
    } else if (imc >= 40 && imc < 49.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 3 </span>"; // Mensaje para obesidad tipo 3
    } else if (imc >= 50 ) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 4 </span>"; // Mensaje para obesidad tipo 4
    }

    // Calcular el peso ideal según el sexo
    if (sexo == "Masculino") {
        pesoIdeal = (altura - 100) - ((altura - 150)/4); // Fórmula para calcular el peso ideal para hombres
    } else if (sexo == "Femenino") {
        pesoIdeal = (altura - 100) - ((altura - 150)/2); // Fórmula para calcular el peso ideal para mujeres
    }

    // Calcular la diferencia de peso entre el peso actual y el peso ideal
    diferenciaPeso = pesoActual - pesoIdeal;

    // Mostrar los resultados en la consola
    console.log("Peso Ideal:",pesoIdeal);
    console.log("Diferencia peso",diferenciaPeso.toFixed(2));
    console.log(imc.toFixed(2));
    console.log(mensajeImc);

    // Construir el mensaje de resultado
    mensaje = `<strong>Resultado:</strong><br>Edad:${edad} años<br>Peso actual: ${pesoActual} kg<br>Altura:${altura} cm <br>IMC: ${imc.toFixed(2)} ${mensajeImc} <br> Peso Ideal: <span class="badge text-bg-info">${pesoIdeal} kg</span> <br> Deberias perder:<span class="badge text-bg-danger">${diferenciaPeso.toFixed(2)} Kg</span> `;
    
    // Mostrar el mensaje de resultado en el contenedor con id "resultado"
    document.getElementById("resultado").innerHTML = `<div class="alert alert-primary" role="alert">${mensaje}</div>`;

});

