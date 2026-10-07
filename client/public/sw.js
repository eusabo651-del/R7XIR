const CACHE_NAME = "r7xir-shell-v2";
const APP_SHELL = ["/", "/manifest.json", "/r7xir-icon-180.png", "/r7xir-icon-192.png", "/r7xir-icon-512.png", "/r7xir-icon-maskable-512.png", "/spotify-mark-white.png", "/rd-portrait.jpeg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || event.request.url.includes("/api/")) return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
