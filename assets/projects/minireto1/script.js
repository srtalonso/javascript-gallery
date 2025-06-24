//Que nos valide lo priemro que es un nº
//Para ello creamos la funcion auxiliar 
function leerNumero(id){
    //Obtiene el elemento por su id y extra su valor coo txto
    //iniciamos una constante 
    const val=parseFloat(document.getElementById(id).value);//parsefloat para que devuelva el valor introducido por un nº

    //Si el valor no es valido, devuelve el siguiente mensaje, si no el numero convertido
    //Verifica si 'val' no es un nº. Para esto 'isNaN'. 
    //Si es asi devuelve un null indicando valor invalido
    //Si 'val' si es un nº valido devueve tal cual
    // el simblo ? significa operador ternario-> es lo mismo que 'if ...else'
   return isNaN(val) ? null : val; 
}

//1. Calcular perimetro de un restangulo
function calcularPerimetro(){
    //Leer la base y laaltura usando la función auxiliar
    const b =leerNumero('baseRect'); //Una vez introducido el valor pasará a la función de arriba para verificar que es un avalor nmerico
    const h =leerNumero('alturaRect');

    //Si cualquiera de los dos nº es null (valor invalido), mostrar la siguiente aleatar:
    if (b === null || h === null) return alert('Por favor, ingresa valores validos');

    //Si todo es valido, aplicará la formula del perimetro
    const p = 2 *(b+h);

    //Muestra el resultado en el <> con el id 'resPerimetro'
    document.getElementById('resPerimetro').textContent =`Perimetro: ${p}`;
}

//2.Conversion Conversión de Celsius a Fahrenheit
function convertirFahrenheit(){                 //El nombre es el que le hemos dado en onclick
    //Leer el valor en Celsius
    const c = leerNumero('celsius');
    //Valida el nº
    if (c === null) return alert('Por favor ingresa un valor valido');
    //Fórmula de conversión:  (ºC X9/5)+32
    const f = ( c * 9/5) + 32;
    //mOSTRAR LA CONVERSIÓN REDONDEANDO A DOS DECIMALES
    document.getElementById('resFahrenheit').textContent =
    `${c.toFixed(2)} ºC = ${f.toFixed(2)}ºF`;
}

// 3. Calcula el área de un triángulo
function calcularAreaTriangulo() {
  const b = leerNumero('baseTri');    // Base del triángulo
  const h = leerNumero('alturaTri');  // Altura del triángulo

  if (b === null || h === null) return alert('Por favor ingresa valores válidos.');

  // Fórmula del área: (base × altura) / 2
  const area = (b * h) / 2;

  document.getElementById('resTriangulo').textContent = `Área: ${area}`;
}

// 4. Calcula la circunferencia de un círculo
function calcularCircunferencia() {
  const r = leerNumero('radio');  // Radio del círculo

  if (r === null) return alert('Por favor ingresa un valor válido.');

  // Fórmula: 2 × π × radio
  const c = 2 * Math.PI * r;

  document.getElementById('resCircunferencia').textContent =
    `Circunferencia: ${c.toFixed(2)} m2`;  // Redondeo a dos decimales
}

// 5. Calcula el precio final tras aplicar descuento porcentual
function calcularPrecioFinal() {
  const precio = leerNumero('precioOriginal');  // Precio inicial
  const dto    = leerNumero('descuento');       // Porcentaje de descuento

  // Valida ambos valores
  if (precio === null || dto === null) return alert('Por favor ingresa valores válidos.');

  // Precio final = precio × (1 - descuento/100)
  const final = precio * (1 - dto / 100);

  document.getElementById('resDescuento').textContent =
    `Precio final: ${final.toFixed(2)} €`;  // Muestra el descuento con dos decimales
}
