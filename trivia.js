/* VARIABLES DE BOTONES */

//Elegir tema
const tema1 = document.getElementById("tema1");
const tema2 = document.getElementById("tema2");

//Pasar a la siguiente pregunta

const paisesSg = document.getElementById("paises_siguiente");
const deportesSg = document.getElementById("deportes_siguiente")

const usuario = document.getElementById('name');
const btn = document.getElementById('btn');
const final = document.getElementsByName('final');


/* VARIABLES QUE CAMBIAN */
let pregunta_actual = 1;
let resultado = 0;

/* FUNCION PRINCIPAL */

btn.addEventListener('click', () => {

    const nombre = usuario.value;

    // esta funcion sirve para que cuando yo haga click en mi inicio, guarde mis datos y me de la bienvenida
    if (nombre.length > 1) {
        document.getElementById('saludo').innerHTML = `Hola ${nombre} elige tu tema preferido.`;
        document.getElementById('trivia').style.display = 'none';
        document.getElementById('comienzo').style.display = 'block';
    }

    // ahora, si el usuario no coloca su nombre, debe mostrar un alert
    else {
        alert('Ingresa tu nombre');
    }

})
//con esta funcion presiona el boton al darle click a enter
usuario.addEventListener("keyup", (event)=> {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});

/* DEPORTES */

// Si elige deporte, se muestra la primera pregunta
tema1.addEventListener('click', () => {
    document.getElementById('trivia').style.display = 'block';
    document.getElementById('deportes').style.display = 'block';
    document.getElementById('pregunta_deportes' + pregunta_actual).style.display = 'block';
    document.getElementById('deportes_siguiente').style.display = 'inline-block';


    document.getElementById('comienzo').style.display = 'none';
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('final_deportes').style.display = 'none';
    document.getElementById('deportes_resultados').style.display = 'none';

})

deportesSg.addEventListener('click', () => {

    const siguiente_pregunta = pregunta_actual + 1;

    //si esta selecionado un elemento, va a pasar a la siguiente pregunta
    if (document.querySelector('input[name="respuestas_dep1"]:checked') && pregunta_actual == 1) {
        document.getElementById('pregunta_deportes' + siguiente_pregunta).style.display = 'block';
        document.getElementById('pregunta_deportes' + pregunta_actual).style.display = 'none';
        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_dep1"]:checked').value === "1") {
            resultado = resultado + 1;
        } else {
            resultado = resultado;
        }
        pregunta_actual++

    } else if (document.querySelector('input[name="respuestas_dep2"]:checked') && pregunta_actual == 2) {
        document.getElementById('pregunta_deportes' + siguiente_pregunta).style.display = 'block';
        document.getElementById('pregunta_deportes' + pregunta_actual).style.display = 'none';

        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_dep2"]:checked').value === "1") {
            resultado = resultado + 1;
        } else {
            resultado = resultado;
        }
        pregunta_actual++

    } else if (document.querySelector('input[name="respuestas_dep3"]:checked') && pregunta_actual == 3) {
        document.getElementById('pregunta_deportes' + pregunta_actual).style.display = 'none';
        document.getElementById('deportes_siguiente').style.display = 'none';

        //acá muestra el mensaje final
        document.getElementById('final_deportes').innerHTML = usuario.value + " has completado tu trivia!"
        document.getElementById('final_deportes').style.display = 'inline-block';
        document.getElementById('deportes_resultados').style.display = 'inline-block';

        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_dep3"]:checked').value === "1") {
            resultado = resultado + 1;
        } else {
            resultado = resultado;
        }

    } else { alert('Marca una respuesta') }

})

/* PAISES */

// Si elige paises, se muestra la primera pregunta
tema2.addEventListener('click', () => {
    document.getElementById('trivia').style.display = 'block';
    document.getElementById('paises').style.display = 'block';
    document.getElementById('pregunta_paises' + pregunta_actual).style.display = 'block';
    document.getElementById('paises_siguiente').style.display = 'inline-block';

    document.getElementById('comienzo').style.display = 'none';
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('deportes').style.display = 'none';
    document.getElementById('final_paises').style.display = 'none';
    document.getElementById('paises_resultados').style.display = 'none';

})

//puede declara la variable siguiente_pregunta tambien aqui porque es diferente la funcion y no afecta
//pregunta_paises viene del ID que se esta concatenando
paisesSg.addEventListener('click', () => {
    const siguiente_pregunta = pregunta_actual + 1;

    if (document.querySelector('input[name="respuestas_preg1"]:checked') && pregunta_actual == 1) {
        document.getElementById('pregunta_paises' + siguiente_pregunta).style.display = 'block';
        document.getElementById('pregunta_paises' + pregunta_actual).style.display = 'none';

        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_preg1"]:checked').value === "1") {
            resultado = resultado + 1;
        } else {
            resultado = resultado;
        }

        pregunta_actual++

    } else if (document.querySelector('input[name="respuestas_preg2"]:checked') && pregunta_actual == 2) {
        document.getElementById('pregunta_paises' + siguiente_pregunta).style.display = 'block';
        document.getElementById('pregunta_paises' + pregunta_actual).style.display = 'none';

        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_preg2"]:checked').value === "1") {
            resultado = resultado + 1;
        } else {
            resultado = resultado;
        }

        pregunta_actual++

    } else if (document.querySelector('input[name="respuestas_preg3"]:checked') && pregunta_actual == 3) {
        document.getElementById('pregunta_paises' + pregunta_actual).style.display = 'none';
        document.getElementById('paises_siguiente').style.display = 'none';

        //acá muestra el mensaje final
        document.getElementById('final_paises').innerHTML = usuario.value + " has completado tu trivia!";
        document.getElementById('final_paises').style.display = 'inline-block';
        document.getElementById('paises_resultados').style.display = 'inline-block';


        //si la pregunta seleccionada es la correcta, va a sumar
        if (document.querySelector('input[name="respuestas_preg3"]:checked').value === "1") {
            resultado = resultado + 1;

        } else {
            resultado = resultado;

        }

    } else { alert('Marca una respuesta') }

})

/* VOLVER A JUGAR */

volver.addEventListener('click', () => {
    pregunta_actual = 1;
    resultado = 0;

    // acá le aplica el valor de false a todos los elementos de tipo radio, es decir, se desmarcan, ya que con el querySelectorAll, devuelve toda una lista de los elementos que consiga con este input. Entonces con mi for, yo recorro toda esta lista y accedo al atributo 'checked'. 
    let radios = document.querySelectorAll('input[type="radio"]:checked');

    for (const i in radios) {
        radios[i].checked = false
    }

    document.getElementById('comienzo').style.display = "block";
    // divs
    document.getElementById('trivia').style.display = "none";
    document.getElementById('resultados_caja').style.display = "none";
    //resultados
    document.getElementById('deportes').style.display = "none";
    document.getElementById('final_deportes').style.display = "none";
    document.getElementById('deportes_resultados').style.display = "none";
    document.getElementById('final_paises').style.display = "none";
    document.getElementById('paises_resultados').style.display = "none";
    document.getElementById('paises').style.display = "none";

})

/* RESULTADOS GENERALES */

function finalizar() {
    document.getElementById('trivia').style.display = 'none';
    document.getElementById('resultados_caja').style.display = 'block';

    switch (resultado) {
        case 1:

            document.getElementById("resultados_finales").innerHTML = `¡Felicidades ${usuario.value}! <br> Tu puntaje es: <br>
        <i class="nes-icon is-large star"></i>  <i class="nes-icon is-large star is-transparent"></i>  <i class="nes-icon is-large star is-transparent"></i>`;

            break;

        case 2:

            document.getElementById("resultados_finales").innerHTML = `¡Felicidades ${usuario.value}! <br> Tu puntaje es: <br>
        <i class="nes-icon is-large star"></i> <i class="nes-icon is-large star"></i> <i class="nes-icon is-large star is-transparent"></i>`;

            break;

        case 3:

            document.getElementById("resultados_finales").innerHTML = `¡Felicidades ${usuario.value}! <br> Tu puntaje es: <br>
        <i class="nes-icon is-large star"></i> <i class="nes-icon is-large star"></i> <i class="nes-icon is-large star"></i>`;

            break;

        default:

            document.getElementById("resultados_finales").innerHTML = `¡Lo siento ${usuario.value}! <br> Tu puntaje es: <br>
        <i class="nes-icon is-large star is-transparent"></i> <i class="nes-icon is-large star is-transparent"></i> <i class="nes-icon is-large star is-transparent"></i>`;

            break;
    }

}