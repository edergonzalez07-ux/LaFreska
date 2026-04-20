document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("pantalla-calenton");
    const contenido = document.getElementById("contenido-web");

    // 1. Quitar Splash Screen
    setTimeout(() => {
        splash.classList.add("subir-telon");
        contenido.classList.remove("oculto");
        contenido.classList.add("visible");
        
        setTimeout(() => {
            splash.style.display = 'none';
        }, 800);
    }, 2000);

    // 2. Contador de pecadores dinámico
    const contador = document.getElementById("numero-pecadores");
    if(contador) {
        let cuenta = 4000;
        setInterval(() => {
            cuenta += Math.floor(Math.random() * 2);
            contador.innerText = "+" + cuenta.toLocaleString();
        }, 4000);
    }
});

// TRANSICIÓN DE CAMBIO DE PÁGINA (CAJA / APAGÓN)
document.addEventListener('DOMContentLoaded', () => {
    const enlacesPizzas = document.querySelectorAll('a[href="pizzas.html"]');
    const pantallaTransicion = document.getElementById('transicion-caja'); 

    if(pantallaTransicion) {
        enlacesPizzas.forEach(enlace => {
            enlace.addEventListener('click', function(evento) {
                evento.preventDefault(); 
                const urlDestino = this.href;

                // Activamos el efecto visual
                pantallaTransicion.classList.add('activado');

                // Esperamos 700ms para ver el golpe/glitch, luego redirigimos
                setTimeout(() => {
                    window.location.href = urlDestino;
                }, 1500); 
            });
        });
    }
});

