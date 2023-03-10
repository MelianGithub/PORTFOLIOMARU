window.sr = ScrollReveal();

sr.reveal(".reveal", {
    delay: 120, // Retrasar la animación 200ms
    duration: 500, // Duración de la animación de 1 segundo
    easing: "ease-out", // Añadir un efecto de aceleración a la animación
    origin: "bottom", // Hacer que los elementos se muestren desde la parte inferior de la página
    distance: "30px", // Distancia desde donde los elementos aparecerán
    // reset:true,
    viewFactor: 0,
    opacity: 0

})
sr.reveal(".reveal2", {
    delay: 300, // Retrasar la animación 200ms
    duration: 500, // Duración de la animación de 1 segundo
    easing: "ease-out", // Añadir un efecto de aceleración a la animación
    origin: "bottom", // Hacer que los elementos se muestren desde la parte inferior de la página
    distance: "40px", // Distancia desde donde los elementos aparecerán
    // reset:true,
    viewFactor: 0,

})

sr.reveal(".reveal3", {
    delay: 400, // Retrasar la animación 200ms
    duration: 700, // Duración de la animación de 1 segundo
    easing: "ease-out", // Añadir un efecto de aceleración a la animación
    origin: "bottom", // Hacer que los elementos se muestren desde la parte inferior de la página
    distance: "40px", // Distancia desde donde los elementos aparecerán
    // reset:true,
    viewFactor: 0,
})

if (window.innerWidth <= 500) {
    sr.reveal(".reveal-left", {
        delay: 200, 
        duration: 700,
        easing: "ease-out",
        origin: "bottom",
        distance: "40px",
        viewFactor: 0,
    })
} else {
    sr.reveal(".reveal-left", {
        delay: 200,
        duration: 700,
        easing: "ease-out",
        origin: "left",
        distance: "40px",
        viewFactor: 0,
    })
}

if (window.innerWidth <= 500) {
    sr.reveal(".reveal-right", {
        delay: 200,
        duration: 700,
        easing: "ease-out",
        origin: "bottom",
        distance: "40px",
        viewFactor: 0,
    })
} else {
    sr.reveal(".reveal-right", {
        delay: 200,
        duration: 700,
        easing: "ease-out",
        origin: "right",
        distance: "40px",
        viewFactor: 0,
    })
}

