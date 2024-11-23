 function updateClock() {
            const clockElement = document.getElementById('clock');
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            clockElement.textContent = timeString;
        }

        // Actualiza el reloj al cargar la página y cada segundo
        setInterval(updateClock, 1000);
        updateClock(); // Llama a la función una vez para mostrar la hora inmediatamente

        // Registro del Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(() => console.log('Service Worker registrado con éxito'))
                .catch((error) => console.error('Error al registrar el Service Worker:', error));
        }