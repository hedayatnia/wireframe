// Offline cache for the single-file app. Network-first with cache fallback.
const CACHE = 'wireframe-v3';
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    // delete ALL old caches
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // skip non-http requests
  if (!e.request.url.startsWith('http')) return;
  e.respondWith((async () => {
    try {
      // always go to network, bypassing HTTP cache
      const fresh = await fetch(e.request, { cache: 'no-store' });
      if (fresh.ok) {
        const copy = fresh.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return fresh;
    } catch (err) {
      const hit = await caches.match(e.request);
      if (hit) return hit;
      throw err;
    }
  })());
});