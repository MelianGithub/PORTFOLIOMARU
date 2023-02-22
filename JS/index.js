const candl = document.querySelector("#candl");
const candlFotos = ["./img/candl/candl1.png", "./img/candl/candl2.png", "./img/candl/candl3.png", "./img/candl/candl4.png", "./img/candl/candl5.png"];
cambiarImagen(candl, candlFotos);

const agoodboy = document.querySelector("#agoodboy");
const agoodboyFotos = ["./img/agoodboy/2fotosinicio.png", "./img/agoodboy/goodone.png", "./img/agoodboy/good3.png", "./img/agoodboy/goodthree.png", "./img/agoodboy/goodtwo.png"];
cambiarImagen(agoodboy, agoodboyFotos);

const bonnies = document.querySelector("#bonnies");
const bonniesFotos = ["./img/bonni/3fotosinicio.png", "./img/bonni/bonnietwo.png", "./img/bonni/bonnieeight.png", "./img/bonni/bonniesix.png", "./img/bonni/bonniethree.png"];
cambiarImagen(bonnies, bonniesFotos);

function cambiarImagen(elemento, listaImagenes) {
    let indice = 0;
    let intervalo;

    elemento.addEventListener("mouseover", () => {
        if (!intervalo) {
            cambiarFoto();
            intervalo = setInterval(cambiarFoto, 500);
        }

    });

    elemento.addEventListener("mouseout", () => {
        clearInterval(intervalo);
        intervalo = null;
    });

    function cambiarFoto() {
        indice = (indice + 1) % listaImagenes.length;
        elemento.src = listaImagenes[indice];
    }
}

