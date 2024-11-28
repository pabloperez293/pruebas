const boton = document.getElementById("miBoton");

boton.addEventListener("click", (event) => {
    event.target.textContent =
    event.target.textContent === "Haz clic en mí" ?
     "¡Gracias!" : "Haz clic en mí";
});
