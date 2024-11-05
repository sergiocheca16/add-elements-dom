 // Aquí tu código


const lista = document.getElementById("lista");
const agregar = document.getElementById("agregar");

agregar.addEventListener("click", function() {
    let listaAsk = prompt("Añade alimentos que deseas comprar");

    if (listaAsk) {
        const li = document.createElement('li');
        li.textContent = listaAsk;
        lista.appendChild(li);
    }
});
