// File: css/script.js
  document.addEventListener("DOMContentLoaded", function () {
  // Menú hamburguesa
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Botones de compra con clase .btn-sus
  const botonesSus = document.querySelectorAll(".btn-sus");
  botonesSus.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const confirmacion = confirm("¿Estás seguro de que deseas comprar esta suscripción?");
      if (confirmacion) {
        // Buscar el contenedor del botón (la suscripción)
        const contenedor = boton.closest(".subscription-card");
        if (contenedor) {
          // Buscar el span con la cantidad dentro de ese contenedor
          const cantidadSpan = contenedor.querySelector(".cantidad");
          if (cantidadSpan) {
            let plazas = parseInt(cantidadSpan.textContent);
            if (plazas > 0) {
              plazas -= 1;
              cantidadSpan.textContent = plazas;
              // Mostrar modal de confirmación
              const modal = document.getElementById("modal-compra");
              modal.style.display = "flex";

              // Ocultar modal después de 2.5 segundos
              setTimeout(() => {
               modal.style.display = "none";
                }, 2500);
              if (plazas === 0) {
                cantidadSpan.parentElement.textContent = "Agotado ❌";
                boton.disabled = true;
                boton.textContent = "No disponible";
                boton.style.backgroundColor = "#ccc";
                boton.style.cursor = "not-allowed";
              }
            } else {
              alert("Lo sentimos, ya no hay plazas disponibles.");
            }
          }
        }
      } else {
        alert("Compra cancelada.");
      }
    });
  });
});