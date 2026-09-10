// Recetario Toni Merino v2.1.16
// Service worker de transición: no almacena recursos y elimina cachés RTM antiguas.
self.addEventListener("install", event => {
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("rtm-")).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
