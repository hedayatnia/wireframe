// Offline cache for the single-file app. Cache-first; refreshes in the background.
const CACHE = 'wireframe-v1';
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    for (const url of ['./', './index.html']) {
      try { const res = await fetch(url); if (res.ok) await c.put(url, res); } catch (err) {}
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const hit = await caches.match(e.request);
    try {
      const fresh = await fetch(e.request);
      if (fresh.ok) { const copy = fresh.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return fresh;
    } catch (err) {
      if (hit) return hit;
      throw err;
    }
  })());
});
