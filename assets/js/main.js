//eSPRAMOS QUE TODO EL HTML SE CARGEN PARA QUE SE EJECUTE EL JS
document.addEventListener('DOMContentLoaded', () => {
    //Vamos a crear la funcion de filtro: 
        //Buscará dentro del nav todos los botones con el 'id=filters'
        //Nos devolvera una lista con los bottons data-cat
    const buttons = document.querySelectorAll('#filters button');
    //Buscamos todas las tarjetas 
    //Cada tarjeta tiene un atributo data-cat
    const cards = document.querySelectorAll('.card');

    //Recorrremos cada boton para asignarle una función al hacer click
    buttons.forEach(btn => {
        btn.addEventListener('click', ()=> {
            //Al pulsar un boton eliminemos la clase 'active'para que solo el plsado quede marcado
            buttons.forEach(b => b.classList.remove('active'));
                //Añadimos la clase active al btn que se acba de pulsar
                //Asi podemos ver cual esta seleccionado
            btn.classList.add('active');

            //Lee la categoria asocida al btn atraves de data cat' 
            const cat = btn.dataset.cat;

            //Rrecorre cada tarjeta para mostrar u ocultar segun categoria
            cards.forEach(card =>{
                //Si la categoria selecionada es 'all', muestra todos los ejercios
                if (cat === 'all' || card.dataset.cat === cat){
                    card.style.display ='block';
                
                    //Oculta el contenido
                }else{
                    card.style.display ='none';
                }
            });
        });
    });
});