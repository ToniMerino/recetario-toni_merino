// Recetario Toni Merino v1.8.1
// El service worker queda desactivado temporalmente para evitar cachés obsoletas.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(fetch(event.request)));
