/* 
Ejercicio #46. Diseñar un algoritmo en Python para un almacen de zapatos  que tiene una promocion de descuentos para vender al mayor, esta dependerá del número de zapatos que se compre. El precio de cada zapato debe ser ingresado por pantalla 
Si son menos de 10 no hay ningún descuento, Si son mas o igual  de diez y menos de 20, se les dará un descuento de 10% sobre 
el total de la compra Si el numero de zapatos es mayor de veinte pero menor de treinta se le otorga un 20% de descuento. Y si son mas de teinta zapatos se otorgará un 40% descuento "   
*/

function tienda_zapatos(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
    const cantidad = parseInt(document.getElementById('cantidadZapatos').value);
    
    //Declarar variables del proceso y salida

    let respuesta;

    // Validacion
    if (isNaN(precioUnitario) || isNaN(cantidad) || precioUnitario===null || cantidad===null ) {
        respuesta = `<div class='alert alert-danger' role='alert'>Ingrese valores validos </div>`
    } 
    else
        {
    let subtotal = precioUnitario * cantidad;
    let porcentajeDescuento, valorDescuento, totalCompra;
    
    // Proceso - Caluclos
    if (cantidad < 10) {
        porcentajeDescuento = 0;
    } else if (cantidad >= 10 && cantidad < 20) {
        porcentajeDescuento = 0.10;
    } else if (cantidad >= 20 && cantidad < 30) {
        porcentajeDescuento = 0.20;
    } else if (cantidad >= 30) {
        porcentajeDescuento = 0.40;
    } else {
        porcentajeDescuento = 0.40;
    }
    valorDescuento = subtotal * porcentajeDescuento;
    totalCompra = subtotal - valorDescuento;
    
    respuesta = `<div class='alert alert-success' role='alert'>Respuesta: El porcentaje de descuento es del ${porcentajeDescuento * 100}%. <br> El valor del descuento es $ ${valorDescuento.toFixed(2)}, y el total de la compra es $${totalCompra.toFixed(2)}.</div>`; 
    }

    //salida    

    document.getElementById("respuesta-app-1").innerHTML =respuesta;
}

/* 
Ejercicio #47. Diseñar un algoritmo que identifique si una persona es niño, joven, adulto o adulto mayor.
Para lo cual debe leer su edad:
Si la edad es menor o igual a 12 años, el algoritmo debe indicar Eres un niño
Si la edad es mayor a 12 años y menor o igual a 40 años, el algoritmo debe indicar Eres un joven
Si la edad es mayor a 40 años y menor o igual a 60 años, el algoritmo debe indicar Eres un adulto
Si la edad es mayor a 60 años el algoritmo debe indicar Eres un adulto mayor
*/

function persona(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const edad = parseFloat(document.getElementById('edad').value);
    //Declarar variables del proceso y salida
    let respuesta,res;

    // Validacion
    if (isNaN(edad) || edad== null ){
        respuesta = `<div class='alert alert-danger' role='alert'>Ingrese valores validos </div>`
    }
    else{
    // Proceso - Calculos
    if (edad <= 12) {
        res = "Niño";
        icon= `<img src='img/niño.png'></img>`;
    } else if (edad > 12 && edad <= 40) {
        res = "Joven";
        icon= `<img src='img/joven.png'></img>`;
        } else if (edad > 40 && edad <= 60) {
        res = "Adulto";
        icon= `<img src='img/adulto.png'></img>`;
    } else if (edad > 60) {
        res = "Adulto Mayor";
        icon= `<img src='img/anciano.png'></img>`;
    } else {
        res = "Ingresó un valor errado";
    }
    respuesta = `<div class='alert alert-success' role='alert'> Respuesta: De acuerdo a la edad ${edad}, la persona es: ${res} ${icon}   </div>`;
    }
    // Salida
    document.getElementById("respuesta-app-2").innerHTML = respuesta;
}

/* 
Ejercicio #48. Diseñar un algoritmo que calcule el IMC de una persona y lo clasifique de acuerdo a la siguiente tabla
IMC CLASIFICACION
------------------
<18.5       Bajo peso
18.5 – 24.9 Normal
25.0 – 29.9 Sobrepeso
30.0 – 34.9 Obesidad tipo 1
35.0 – 39.9 Obesidad tipo 2
40.0 - 49.9 Obesidad tipo 3
>50.0       Obesidad tipo 4
*/

function imc(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    //Declarar variables del proceso y salida
    let imc, respuesta;
    // Proceso - Calculos
    
    imc = peso / (estatura * estatura);
    console.log(imc)
    if (imc < 18.5) {
        respuesta = "Bajo peso";
        altipo = 'alert-secondary';
        icon= `<img src='img/flaco.png'></img>`;
    } else if (imc >= 18.5 && imc < 24.9) {
        respuesta = "Normal";
        altipo = 'alert-success';
        icon= `<img src='img/normal.png'></img>`;
    } else if (imc >= 25 && imc < 29.9) {
        respuesta = "Sobrepeso";
        altipo = 'alert-warning';
        icon= `<img src='img/gordo.png'></img>`;
        } else if (imc >= 30 && imc < 34.9) {
        icon= `<img src='img/gordo.png'></img>`;
        respuesta = "Obesidad tipo 1";
        altipo = 'alert-danger';
    } else if (imc >= 35 && imc < 39.9) {
        respuesta = "Obesidad tipo 2";
        altipo = 'alert-danger';
        icon= `<img src='img/gordo.png'></img>`;
    } else if (imc >= 40 && imc < 49.9) {
        respuesta = "Obesidad tipo 3";
        altipo = 'alert-danger';
        icon= `<img src='img/gordo.png'></img>`;
    } else if (imc >= 50 ) {
        respuesta = "Obesidad tipo 4";
        altipo = 'alert-danger';
        icon= `<img src='img/gordo.png'></img>`;
    }
    
    // Salida
    document.getElementById('respuesta-app-3').innerHTML=`<div class='alert ${altipo}' role='alert'> Respuesta: El imc de la persona es: ${imc.toFixed(2)} y la clasificación es: ${respuesta} ${icon} </div>` ;
}

//

/* 50. Diseñe un algoritmo que simule la siguiente TABLA:
Rango de Presión (mm Hg)	- Categoría
Menos de 90	                - PRESIÓN BAJA
90 - 119	                - PRESIÓN NORMAL
120 - 139	                - PREHIPERTENSIÓN
140 - 159	                - PRESIÓN ALTA - HIPERTENSIÓN FASE 1
160 o más	                - PRESIÓN ALTA - HIPERTENSIÓN FASE 2
*/
function presion_alterial(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const presion = parseFloat(document.getElementById('presion').value);
    //Declarar variables del proceso y salida
    let respuesta;
    // Proceso - Calculos
    if (presion < 90 ) {
        respuesta = "PRESION BAJA";
        altipo = 'alert-secondary';
    } else if(presion >= 90 && presion < 120 ) {
        altipo = 'alert-success';
        respuesta = "PRESION NORMAL";
    } else if(presion >= 120 && presion <= 139 ) {
        respuesta = "PREHIPERTENSION"; 
        altipo = 'alert-warning';
    } else if(presion >= 140 && presion <= 159 ) {
        respuesta = "PRESION ALTA - HIPERTENSION FASE 1";
        altipo = 'alert-danger';
    } else if(presion >= 160 ) {
        respuesta = " PRESION ALTA - HIPERTENSION FASE 2"
        altipo = 'alert-danger';
    }
    // Salida
    document.getElementById('respuesta-app-4').innerHTML=`<div class='alert ${altipo} role='alert'>Respuesta: La presión arterial de la persona es: ${presion} mm Hg y la clasificación es: ${respuesta} </div>`;
}


