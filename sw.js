// Archivo Service Worker mínimo requerido para que la App sea instalable (PWA)
self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
    // Al dejarlo vacío o responder directamente, cumplimos con el requisito 
    // del navegador para mostrar el botón de "Añadir a la pantalla de inicio"
});
