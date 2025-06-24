// 1. Calcula el precio final tras aplicar descuento porcentual

//creamos la function 'calcularPrecioFinal'
function calcularDescuento(precio, descuentoPct) {                                       // hemos utilizado los 'id' de los span 
  const ahorro = precio * (descuentoPct/100);                                         // 'descuentoPct' es el porcentaje de descuento 
  const total  = precio - ahorro;   
  return {ahorro, total};
}

//precio es el precio original.
//descuentoPct es el porcentaje de descuento (por ejemplo, 20).
//Se calcula el ahorro: precio * (descuento / 100).
//Luego se resta al precio: precio - ahorro.
//Se devuelven ambos valores.



//Evento al aplicar el descuento
//Vamos hacer:
//Captura lo que el usuario escribe.
//Llama a la función para calcular el descuento.
//Muestra el resultado en la pantalla.

    document.getElementById('btnAplicar').addEventListener('click',() =>{
        // 3. se va aco,portar asi:
        //Leemos lo valores introducidos por el usuario
        const precio =parseFloat(document.getElementById('precio').value) || 0;  //lo realacionamos con los id del HTML
        const pct =parseFloat(document.getElementById('porcentaje').value) || 0;  
        //Calculamos y mostramos
        const {ahorro,total} = calcularDescuento(precio, pct);
        //muestramos le daros
        document.getElementById('ahorro').textContent =ahorro.toFixed(2);
        document.getElementById('final').textContent = total.toFixed(2);
    }); 



  /* 2. Conversor de divisas*/
    //Es un objeto: una especie de “tabla” con monedas y su valor.
      const tasasDesdeEuro = {
        USD: 1.10,
        GBP: 0.85,
        JPY: 150.25,
        MXN: 18.65
      };

    //Creamos la funcion:
      //Recibe cuántos euros se quieren convertir.
      //Busca la tasa de conversión y la multiplica.


    function convertirDesdeEuro(cantidadEUR, destino) {
      const tasa = tasasDesdeEuro[destino] || 1;
      return cantidadEUR * tasa;
    }

    //Captura la cantidad de euros y la moneda elegida.
    //Llama a la función y muestra el resultado.
    document.getElementById('btnConvertir').addEventListener('click', () => {
      const cantidad = parseFloat(document.getElementById('cantidadEUR').value) || 0;
      const destino = document.getElementById('monedaDestino').value;

      const resultado = convertirDesdeEuro(cantidad, destino);
      document.getElementById('resultadoConversion').innerText = resultado.toFixed(2);
    });



// 3. Calculadora de IMC
// El IMC se calcula con la fórmula: peso dividido por altura al cuadrado.
//Realizamos la funcion en base a esa formula
    function calcularIMC(peso, altura) {
      return peso / (altura * altura);
    }

    // Clasifica el resultado del IMC según los rangos estándar.
    function clasificarIMC(imc) {
      if (imc < 18.5) return 'Bajo peso';
      if (imc < 25)   return 'Normal';
      if (imc < 30)   return 'Sobrepeso';
      return 'Obesidad';
    }

//Toma el peso y la altura introducidos por el usuario.
// Calcula el IMC y lo muestra, junto con la clasificación. 
    document.getElementById('btnIMC').addEventListener('click', () => {
      const peso = parseFloat(document.getElementById('peso').value) || 0;
      const altura = parseFloat(document.getElementById('altura').value) || 1; // evita división por 0

      const imc = calcularIMC(peso, altura);
      document.getElementById('resultadoIMC').textContent= imc.toFixed(2);
      document.getElementById('clasificacionIMC').textContent = clasificarIMC(imc);
    });





//4. Lista de la compra dinámica

    //Crea un nuevo elemento de lista (<li>) y le pone el texto.
    function agregarItem(texto) {
      const li = document.createElement('li');
      li.textContent = texto;

    // Botón para eliminar
      //Crea un botón "Eliminar".
      //Le pone un click que borra el elemento al que pertenece.
      const btnBorrar = document.createElement('button');
      btnBorrar.textContent = 'Eliminar';
      btnBorrar.addEventListener('click', () => eliminarItem(li));

    //Añade el botón al <li> y luego lo agrega a la lista principal.
      li.appendChild(btnBorrar);
      document.getElementById('listaCompra').appendChild(li);
    }

 //Borra el <li> del DOM.
    function eliminarItem(elementoLi) {
      elementoLi.remove();
    }

    //Cuando haces clic en "Añadir", agrega el producto si no está vacío.
    document.getElementById('btnAgregar').addEventListener('click', () => {
      const texto = document.getElementById('itemTexto').value.trim();
      if (texto !== '') {
        agregarItem(texto);
        document.getElementById('itemTexto').value = '';
      }
    });



//5. Temporizador sencillo

//'restante' guarda el tiempo que va quedando.
//Llama a la función onTick (para mostrarlo en pantalla).
function iniciarTemporizador(segundos, onTick, onEnd) {
      let restante = segundos;
      onTick(restante); // muestra el primer número inmediatamente

//setInterval ejecuta esto cada 1 segundo (1000 ms).
//Cuando llega a 0, para el temporizador y muestra "¡Tiempo!".
  const timerId = setInterval(() => {
      restante--;
      if (restante <= 0) {
        clearInterval(timerId);
        onEnd(); // muestra "¡Tiempo!"
      } else {
        onTick(restante); // sigue mostrando los segundos
      }
    }, 1000);
  }

//Toma el valor de segundos que introduces
//Llama a la función para empezar la cuenta atrás.
    document.getElementById('btnIniciar').addEventListener('click', () => {
      const segundos = parseInt(document.getElementById('segundos').value) || 0;
      if (segundos <= 0) return; // No iniciar con valores no válidos

      iniciarTemporizador(
        segundos,
        (restante) => {
          document.getElementById('contador').textContent = restante;
        },
        () => {
          document.getElementById('contador').textContent = '¡Tiempo!';
        }
      );
    });


