/* sw.js — NEUTRALIZADO el 2026-07-08.
   El contenido anterior cargaba código de una red de ads/push de terceros NO
   autorizada (ver copia de seguridad del fichero para el detalle). Se ha
   retirado por completo.
   Este service worker ahora SOLO se autodesregistra: los navegadores que aún
   tuvieran el service worker viejo cacheado lo sustituyen por este al navegar,
   y este se elimina solo (borra cachés + unregister() + recarga la pestaña).
   No hace ninguna otra cosa ni contacta con ningún dominio externo. */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (e) { /* no-op */ }
    try {
      await self.registration.unregister();
    } catch (e) { /* no-op */ }
    try {
      var wins = await self.clients.matchAll({ type: 'window' });
      wins.forEach(function (c) { c.navigate(c.url); });
    } catch (e) { /* no-op */ }
  })());
});
