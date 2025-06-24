//1. To-Do lIST
//aSIGANR VARIABLEAS PARA identificadores
//Nombramos variables
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
//Creamos evento click
addTaskBtn.addEventListener('click', () => {
    //Leer el valor del Input
    const taskText = taskInput.value.trim();                   //Trim no cuenta los espacios en blancos
    if (taskText === '') return;

    //Creamos la lista y asignamos el texto
    const li =document.createElement('li');
    li.textContent = taskText;   
    
    // Añadir a la lista y limpiar input
    taskList.appendChild(li);
    taskInput.value = '';
});



//2. formulario dinamico
const registerForm = document.getElementById('registerForm');      // Obtenemos el elemento <form> con id="registerForm"
const formResult    = document.getElementById('formResult');       // Obtenemos el contenedor donde mostraremos el resultado

//creamos el evento submit
registerForm.addEventListener('submit', e =>{
    e.preventDefault();     //evitamos que el formulario recarge la pagina ; de esta manera los otros programas no empeizan de cro, mantengan los datos insertados

    //Recogemos los dtos del fomr
    const nombre = registerForm.nombre.value.trim();
    const email = registerForm.email.value.trim();
    const edad = registerForm.edad.value.trim();

    
    //Valida las entradas que esten correctas, completas 
     if (!nombre || !email || !edad ) {

      //En caso que no este completo muestra el mensaje siguiente:
        formResult.textContent ='Por favor, completa todos los campos.';
        return;
    }
       
    //muestro los datos recibidos del form
    formResult.innerHTML =`
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>email:</strong>${email}</p>
        <p><strong>Edad:</strong>${edad}</p> 
    `;
});


//3. Calculdora de gastos
//Conesat funcion vbamos avwer como se añaden elemntos en una array
const expenseInput  = document.getElementById('expense');          // btenemos el input de gasto
const addExpenseBtn = document.getElementById('addExpenseBtn');    // Obtenemos el botón para añadir gasto
const totalSpent    = document.getElementById('totalSpent');       //Obtenemos el elemento donde mostraremos el total

//Creamos las variable
//Al ser acumulumador hay que darle un elemnto inicial
//Iniciamosevento
let total = 0;                                                      //Inicializamos la variable total en 0

addExpenseBtn.addEventListener('click', () => {                    //  Listener al hacer clic en “Añadir gasto”
  // Leer y parsear el valor
  const value = parseFloat(expenseInput.value);                    // Convertimos el valor a número flotante
  if (isNaN(value) || value <= 0) return;                         // Si no es un número válido o es ≤ 0, no hacemos nada


//Sumar al total y actualizar pantalla
    total += value;
     totalSpent.textContent = total.toFixed(2);                       // Mostramos con dos decimales

  // Limpiar campo
  expenseInput.value = '';                                         // Vaciamos el input para el siguiente gasto
});



//4. Galerias
const photos = ['img1.png', 'img2.png', 'img3.png'];
let current = 0;

//declaro constante
const photoEl  = document.getElementById('photo');                 // Elemento <img> donde cargamos la foto
const prevBtn  = document.getElementById('prevBtn');               // Botón “anterior”
const nextBtn  = document.getElementById('nextBtn');               // Botón “siguiente”


//Funcion para actualizar las imagenes de la galeria que se ira mostrtando
function updatePhoto() {
    //Cambiamos el atributo scr segun el indice, es decir, que no vaya mostrando las diversas imagenes segun su indice
    photoEl.src =photos[current];
}

//Creamos los botones para que nos muestre el indice
prevBtn.addEventListener('click', ()=> {                            //este evento nos mostrará la img anteriror
    current = (current -1 + photos.length) % photos.length;         //Nos muestra segun la foto que se escuentra mostrada que reste una posicion y nos muestre la anterior
                                                                    //Ponemos 'photos.length' para que en caso que la posiciopn se negativa nos muestre el indice
    updatePhoto();
});

nextBtn.addEventListener('click', ()=> {                            //este evento nos mostrará la img siguiente
    current = (current + 1) % photos.length;                        //Nos muestra segun la foto que se escuentra mostrada, que sume una posicion y nos muestre la siguiente
       updatePhoto();
});






//5.Consulta de clima
//MIRAMOS FUNCIONAMIENTO API
//NOS REGISTRAMOS EN LA API

const cityInput =      document.getElementById('cityInput');
const getWeatherBtn =  document.getElementById('getWeatherBtn');
const weatherResult =  document.getElementById('weatherResult');

//Vamos a mostrar la contante de la API
const apiKey ='da2f4e6cf3ad4b65a66184436252006';

//Listener asincrono al hacer click en el boton
getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();                            //Obtenemos la informacion 
    //Casos: Si introduce mal el nombre de la cuidad aconturnat se o pedidrá de nuevo
    if(!city){
        weatherResult.textContent = `Introduce de nuevo la ciudad.`;
        return;
    }

    //URL de la API con nuesra clave y ciudad
    //Iniciamos const con la url. Para ello construimos los paramentros del URL
    const url =  `https://api.weatherapi.com/v1/current.json?key=${apiKey}` +
              `&q=${encodeURIComponent(city)}` +
              `&lang=es`;  
    try{
        const res = await fetch(url);                           //hacemos la petición a HTTP
        const data = await res.json();                          //Parseamos la respuesta de Json

        //Si la API devuelve error se muestra un mensaje
        if (data.error){
            weatherResult.textContent = `ERROR ${data.error.message}`;
            return;
        }

        //Extraer datos
        const temp= data.current.temp_c;                    //Temprartura en Celsius
        const desc= data.current.condition.text;            //Descripcion del clima
        const icon = data.current.condition.icon;           //Url del icono del clima
        const location= data.location.name;                 //Nombre de la ciudad
    
        //Mosrar resultado
        weatherResult.innerHTML = `
    <p>
        <img src="${icon}" alt="${desc}" style="vertical-align:middle;">
        En <strong>${location}</strong> hace <strong>${temp}°C</strong> y está "<em>${desc}</em>".
    </p>
`;

    } catch (err) {
        weatherResult.textContent= 'No se pudo obtener datos.';
        console.error(err);
    }
});
