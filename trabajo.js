// const botonesComparar = document.querySelectorAll('.btn-comparar');

// botonesComparar.forEach(boton => {
//   boton.addEventListener('click', () => {
//     alert('Añadiendo al carrito de compra');
//   });
// });

// //Validación del nombre
//     const nombre = document.getElementById("nombre").value;
//     if (nombre.trim() === "") {
//         alert("Por favor, ingresa tu nombre.");
//         valid = false;
//     }

//     // Validación del correo electrónico
//     const email = document.getElementById("email").value;
//     const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
//     if (!emailPattern.test(email)) {
//         alert("Por favor, ingresa un correo electrónico válido.");
//         valid = false;
//     }

//     // Validación del teléfono
//     const telefono = document.getElementById("telefono").value;
//     if (!/^\d{9}$/.test(telefono)) { // Aceptar solo 9 dígitos
//         alert("Por favor, ingresa un número de teléfono válido de 9 dígitos, sin espacios ni signos.");
//         valid = false;
//     }

//     // Validación de servicios seleccionados
//     const servicios = document.querySelectorAll('input[name="servicio"]:checked');
//     if (servicios.length === 0) {
//         alert("Por favor, selecciona al menos un servicio.");
//         valid = false;
//     }

//     // Si hay algún error, previene el envío del formulario
//     if (!valid) {
//         event.preventDefault();
//     };



  //   const nombre = document.getElementById("nombre")
  //   const apellido = document.getElementById("apellido")
  //   const email = document.getElementById("email")
  //   const form = document.getElementById("form")
  //   const parrafo = document.getElementById("warnings")

  // form.addEventListener("submit", e=>{
  //     e.preventDefault()
  //     let warnings = ""
  //     if(nombre.value.length <6) {
  //       warnings += 'El nombre no es valido <br>'
  //     }
  //   })


// const nombre = document.getElementById("nombre");
// const apellido = document.getElementById("apellido");
// const email = document.getElementById("email");
// const form = document.getElementById("form");
// const parrafo = document.getElementById("warnings");

// form.addEventListener("submit", e => {
//   e.preventDefault(); // Evita que se envíe el formulario automáticamente

//   let warnings = "";
//   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//   let entrar = false;

//   // Limpiar mensajes anteriores
//   parrafo.innerHTML = "";

//   // Validar campo "nombre"
//   if (nombre.value.length < 6) {
//     warnings += 'El nombre no es válido.<br>';
//     entrar = true;
//   }

//   if (apellido.value.length < 5 || apellido.value.length > 30) {
//     warnings += 'El apellido no es válido.<br>';
//     entrar = true;
//   }
  
//   // console.log(regexEmail.test(email.value))
//   if (!regexEmail.test(email.value)){
//     warnings += 'El correo no es válido.<br>';
//     entrar = true;
//   }
// });

// if (entrar) {
//   parrafo.innerHTML = warnings;
// } else {
//   parrafo.innerHTML = "Formulario enviado correctamente.";
  // Aquí puedes proceder con el envío del formulario o ejecutar alguna otra lógica.
// };

// Si hay advertencias, mostrar en el parrafo
// if (warnings !== "") {
//   parrafo.innerHTML = warnings;
// }

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
  e.preventDefault(); // Evita que se envíe el formulario automáticamente

  let warnings = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let entrar = false; // Definición correcta de la variable

  // Limpiar mensajes anteriores
  parrafo.innerHTML = "";

  // Validar campo "nombre"
  if (nombre.value.length < 6) {
    warnings += 'El nombre no es válido.<br>';
    entrar = true; // Indica que hay errores
  }

  // Validar campo "apellido"
  if (apellido.value.length < 5 || apellido.value.length > 30) {
    warnings += 'El apellido no es válido.<br>';
    entrar = true; // Indica que hay errores
  }
  
  // Validar formato de correo electrónico
  if (!regexEmail.test(email.value)) {
    warnings += 'El correo no es válido.<br>';
    entrar = true; // Indica que hay errores
  }

  // Si hay advertencias, mostrar en el párrafo
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Formulario enviado correctamente.";
    // Aquí puedes proceder con el envío del formulario o ejecutar alguna otra lógica.
  }
});
