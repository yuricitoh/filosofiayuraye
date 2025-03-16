// Función para el contador
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let seconds = 3; // Comienza en 3 segundos
    countdownElement.innerHTML = seconds; // Muestra el contador

    let interval = setInterval(function() {
        seconds--;
        countdownElement.innerHTML = seconds; // Actualiza el contador
        if (seconds <= 0) {
            clearInterval(interval); // Detiene el contador
            setTimeout(function() {
                document.getElementById('splash').classList.add('fade-out'); // Aplica el efecto de desvanecimiento
            }, 500); // Espera medio segundo antes de hacer el fade-out
        }
    }, 1000); // Actualiza cada segundo
}

// Llamar a la función al cargar la página
window.onload = function() {
    startCountdown();
};
