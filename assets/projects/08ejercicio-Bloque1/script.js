// Ejercicio 1: Precio taxi
    document.getElementById('calc-taxi').addEventListener('click', function() { // Evento click para calcular
            const km = parseFloat(document.getElementById('km').value); // Obtiene km como número
            const tarifaBase = 4; // Coste fijo de subida de bandera
            const costeKm = 2.5; // Precio por kilómetro
            const total = tarifaBase + (costeKm * km); // Suma tarifa base más coste por km
            document.getElementById('taxi-result').textContent = 'Precio: ' + total.toFixed(2) + '€'; // Muestra resultado con 2 decimales
        });

// Ejercicio 2: IMC
    document.getElementById('calc-imc').addEventListener('click', function() { // Evento click IMC
            const peso = parseFloat(document.getElementById('peso').value); // Obtiene peso
            const altura = parseFloat(document.getElementById('altura').value); // Obtiene altura
            const imc = peso / (altura * altura); // Fórmula del IMC
            let categoria = ''; // Variable para la categoría
            if (imc < 18.5) { // Comprueba bajo peso
                categoria = 'Bajo peso';
            } else if (imc < 25) { // Comprueba peso normal
                categoria = 'Normal';
            } else if (imc < 30) { // Comprueba sobrepeso
                categoria = 'Sobrepeso';
            } else { // Obesidad
                categoria = 'Obesidad';
            }
            document.getElementById('imc-result').textContent = 'IMC: ' + imc.toFixed(2) + ' - ' + categoria; // Muestra IMC y categoría
        });

// Ejercicio 3: Validación de email
    document.getElementById('check-email').addEventListener('click', function() { // Evento click email
            let email = document.getElementById('email').value; // Lee valor del input
            while (!email.includes('@') || !email.includes('.')) { // Loop hasta tenga '@' y '.'
                email = prompt('Email inválido. Introduce un email válido:'); // Pide email con prompt
            }
            document.getElementById('email-result').textContent = 'Email registrado: ' + email; // Muestra email registrado
        });

// Ejercicio 4: Fibonacci
    document.getElementById('gen-fib').addEventListener('click', function() { // Evento click Fibonacci
            const n = parseInt(document.getElementById('fib-n').value); // Número de términos
            const serie = []; // Array para la serie
            for (let i = 0; i < n; i++) { // Bucle desde 0 hasta n-1
                if (i < 2) { // Los dos primeros términos son 1
                    serie.push(1);
                } else { // Resto de términos: suma de los dos anteriores
                    serie.push(serie[i-1] + serie[i-2]);
                }
            }
            document.getElementById('fib-result').textContent = serie.join(', '); // Muestra la serie separada por comas
        });


// Ejercicio 5: Repetir mensaje
    document.getElementById('repeat-msg').addEventListener('click', function() { // Evento click repetir
            const mensaje = document.getElementById('msg').value; // Obtiene el mensaje
            const veces = parseInt(document.getElementById('msg-n').value); // Obtiene número de repeticiones
            let salida = ''; // Variable para acumular salida
            for (let i = 0; i < veces; i++) { // Bucle de repetición
                salida += mensaje + '<br>'; // Añade mensaje y salto de línea<br>
            }
            document.getElementById('msg-result').innerHTML = salida; // Pone la salida en HTML (para saltos)
        });
   