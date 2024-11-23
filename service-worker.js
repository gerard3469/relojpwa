const CACHE_NAME = 'reloj-pwa-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
];

// Instalación del Service Worker y almacenamiento en caché
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(FILES_TO_CACHE);
            })
            .catch((error) => {
                console.error('Error al almacenar en caché:', error);
            })
    );
});


// Activación y limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Interceptar solicitudes de red y devolver recursos almacenados en caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
