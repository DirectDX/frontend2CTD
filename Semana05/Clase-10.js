// Vamos a trabajar pasando información al Storage.
// De esta manera vamos a poder consumir en un html algo que haya guardado otro.
// 👉 Para eso debemos agregar al principio de la función [5] en script 'Clase-13' la siguiente línea:
//     localStorage.setItem('user', JSON.stringify(estadoUsuario));

/* -------------------------------------------------------------------------- */
/*           [6] FUNCION: Escuchamos el evento de carga de la página          */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", () => {
  const user = recuperarDataDelStorage();

  renderizarElementos(user);
});

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataDelStorage() {
  // buscamos la data almacenada en nuestro bolsillo (localStorage)
  // const datosUsuario = localStorage.getItem("user")
  // // console.log(datosUsuario);

  // // necesito transformar esa info de datosUsuario para que sea legible por JS
  // const datosParseados = JSON.parse(datosUsuario)
  // // console.log(datosParseados);
  const datosParseados = JSON.parse(localStorage.getItem("user"));

  return datosParseados;
}

/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElementos(objetoJS) {
  console.log(objetoJS);
  console.log(objetoJS.email);
  console.log(objetoJS.rol);

  // <h4 id="email"></h4>
  // <p id="perfil"></p>
  const email = document.querySelector("#email");
  const perfil = document.querySelector("#perfil");

  // pintamos las propiedades en pantalla (renderizamos)
  email.textContent = objetoJS.email;
  perfil.innerText = objetoJS.rol;
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login.

function botonCerrarSesion() {
    // div usuario
    const perfil = document.querySelector(".user");
  // elemento boton
  const btnCS = document.createElement("button");
  btnCS.style.backgroundColor = "rgba(255,0,0,0.2)";
  btnCS.style.padding = "5px 20px";
  btnCS.textContent = "Cerrar Sesión";
  btnCS.style.color = "red"
  perfil.appendChild(btnCS);
  //    👇 desarrollarla función
  document.addEventListener("click", () => {
    const confirmacion = confirm("¿Seguro desea cerrar sesión?")

    if (confirmacion) {
        localStorage.clear()
        // aca si me redirige
        location.replace('/Semana05/')
    }
  })
}


botonCerrarSesion();
