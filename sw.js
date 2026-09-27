const CACHE_NAME = 'tag-web-v2.o';
const DYNAMIC_CACHE_NAME = 'tag-web-dynamic-v2.o';
const OFFLINE_URL = '/pages/offline.html';

// 📦 Main default heavy traffic pages aur core files
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/tag-web-logo.png',
    '/assets/tag-web-ogimage.png',
    OFFLINE_URL,
    '/pages/dashboard.html',
    '/pages/other-tags.html',
    '/pages/css-part.html',
    '/pages/javascript-part.html'
];

/* ==========================================================================
   🔄 THE AUTOMATED LIFECYCLE SKIP ENGINE (ANTI-CACHE LOCK)
   ========================================================================== */

// 🎯 Install Event: Cache core assets instantly
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('📦 Core assets successfully cached!');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting(); // ⚡ Forces waiting worker to become active
});

// 🗑️ Activate Event: Clear old obsolete caches automatically
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE_NAME) {
                        console.log('🗑️ Clearing old cache...');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Immediately claims active dashboard clients
});

/* ==========================================================================
   ⚡ HYBRID FETCH ENGINE WITH PARTIAL CONTENT PROTECTION
   ========================================================================== */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                    // 🛡️ THE RADICAL FIXED FILTER: Do not cache status 206 (Audio/Video Chunks)
                    if (
                        event.request.url.startsWith(self.location.origin) &&
                        networkResponse.status !== 206
                    ) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            }).catch(() => {
                // 🎯 OFFLINE FALLBACK LOGIC
                if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
                    return caches.match(OFFLINE_URL);
                }
            });
        })
    );
});
