
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hairstyle-store').then(function(cache) {
      return cache.addAll([
        './pwa_hairstyle.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
