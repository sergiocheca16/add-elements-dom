 // Aquí tu código
document.addEventListener('DOMContentLoaded', function () {
  const lista = document.getElementById('lista');
  const botonAgregar = document.getElementById('agregar');

  // Agregar un elemento a la lista
  function agregarElemento() {
      const nuevoElemento = prompt('Ingrese un nuevo elemento:');
      if (nuevoElemento) {
          const li = document.createElement('li');
          li.textContent = nuevoElemento;
          lista.appendChild(li);
      }
  }

  botonAgregar.addEventListener('click', agregarElemento);
});