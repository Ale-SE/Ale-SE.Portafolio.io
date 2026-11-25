
const galerias = document.querySelectorAll('.galeria-proyecto');

const vistaPrevia = document.getElementById('vistaPrevia');
const imagenAmpliada = document.getElementById('imagenAmpliada');

let fotos = [];
let posicion = 0;

function mostrarImagen() {
    imagenAmpliada.src = fotos[posicion].src;
    vistaPrevia.style.display = 'flex';
}

galerias.forEach(galeria => {
    const imagenes = Array.from(galeria.querySelectorAll('img'));

    imagenes.forEach((imagen, indice) => {
        imagen.onclick = () => {
            fotos = imagenes;
            posicion = indice;
            mostrarImagen();
        };
    });

    if (imagenes.length > 4) {
        const boton = document.createElement('button');
        boton.textContent = '+ Ver más fotos';
        boton.className = 'ver-mas-fotos';

        boton.onclick = () => {
            fotos = imagenes;
            posicion = 4;
            mostrarImagen();
        };

        imagenes[3].parentElement.appendChild(boton);
    }
});

document.getElementById('imagenAnterior').onclick = () => {
    posicion = (posicion - 1 + fotos.length) % fotos.length;
    mostrarImagen();
};

document.getElementById('imagenSiguiente').onclick = () => {
    posicion = (posicion + 1) % fotos.length;
    mostrarImagen();
};

document.getElementById('cerrarVista').onclick = () => {
    vistaPrevia.style.display = 'none';
};
