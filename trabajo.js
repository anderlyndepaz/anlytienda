const botonesComparar = document.querySelectorAll('.btn-comparar');

botonesComparar.forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Producto añadido a la comparación.');
  });
});
