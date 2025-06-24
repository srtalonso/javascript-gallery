//EJERCIOS PROPUESTOS:
//Factorial de un número     //Función: function factorial(n)
//Enunciado: Devuelve el factorial de n (n! = 1·2·3·...·n). Prueba con valores como 0, 5 y 7.
    function factorial(n){
        if (n < 0) {
            return undefined;       // El factorial no está definido para negativos
    }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
    }
        return resultado;
    }

// Pruebas
    console.log("Factorial de 0:", factorial(0)); // 1
    console.log("Factorial de 5:", factorial(5)); // 120
    console.log("Factorial de 7:", factorial(7)); // 5040

//Contar vocales    //Función: function contarVocales(cadena)
//Enunciado: Devuelve el número de vocales (a, e, i, o, u) que aparecen en cadena
    function contarVocales(cadena) {
    const coincidencias = cadena.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
    }

    // Pruebas
    console.log(celsiusAFahrenheit(0));            // 32

//Convertir grados  //Función: function celsiusAFahrenheit(c)
//Enunciado: Convierte una temperatura en grados Celsius c a Fahrenheit usando la fórmula F = c·9/5 + 32.
    function celsiusAFahrenheit(c) {
        return c * 9 / 5 + 32;
    }

    // Pruebas
    console.log(celsiusAFahrenheit(32));               //32Cº son 89.6F

//Sumar 1  //Función: function incrementar(n)
//Enunciado: Devuelve n + 1.
    function incrementar(n) {
        return n + 1;
    }
    // Pruebas
    console.log(incrementar(5));                    // 6

//Multiplicar por 2  //Función: function doble(x)
//Enunciado: Devuelve x * 2.
    function doble(x) {
    return x * 2;
    }

    //Pruebas
    console.log(doble(4));                          //8

//Restar 1  //Función: function decrementar(n)
//Enunciado: Devuelve n - 1.
    function decrementar(n) {
    return n - 1;
    }

    //Pruebas
    console.log(decrementar(8));                //7

//Booleano inverso   //Función: function invertir(b)
//Enunciado: Recibe un valor booleano b y devuelve su negación (!b).
    function invertir(b) {
    return !b;
    }

    //Pruebas
    console.log(invertir(true));                //false

//Concatenar con espacio   //Función: function unir(a, b)
//Enunciado: Devuelve la cadena resultante de a + ' ' + b.
    function unir(a, b) {
    return a + ' ' + b;
    }

    //Prueba
    console.log(unir("Hola", "Pepe"));           // "Hola Pepe"
    
//Elevar al cuadrado //Función: function cuadrado(x)
//Enunciado: Devuelve x * x.
  function cuadrado(x) {
    return x * x;
    }

    //Pruebas
    console.log(cuadrado(26));                      //Result: 676

//Saludo genérico  //Función: function saludo()
//Enunciado: Devuelve la cadena '¡Hola Mundo!' sin usar parámetros.
function saludo() {
  return '¡Hola Mundo!';
}

    //Pruebas
console.log(saludo('¡Hola Madrid!'));               //Sige saliendo '¡Hola Mundo!'






