const CACHE = "starlight-v1";
addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(["index.html","manifest.json","icon.png"])));
    self.skipWaiting();
});
addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
