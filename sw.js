const CACHE_NAME = 'tag-web-v1';
const DYNAMIC_CACHE_NAME = 'tag-web-dynamic-v1';
const OFFLINE_URL = '/pages/offline.html'; // <--- Tumhara custom sorry page

// 📦 Sirf main default heavy traffic pages aur core files
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/tag-web-logo.png',
    '/assets/tag-web-ogimage.png',
    OFFLINE_URL, // Offline template pehle se save rahegi

    // High-priority main index items jo tum ne select kiye hain:
    '/pages/other-tags.html',
    '/pages/css-part.html',
    '/pages/javascript-part.html'
];

// 🛠️ Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('📦 Core assets successfully cached!');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 🔄 Activate Event
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
    self.clients.claim();
});

// ⚡ Hybrid Fetch Engine (The Genius Fix)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                    if (event.request.url.startsWith(self.location.origin)) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            }).catch(() => {
                // 🎯 AGAR USER OFFLINE HAI AUR PAGE CACHE MEIN NAHI HAI:
                // Check karo agar request kisi HTML page ke liye thi, toh sorry page dikhao
                if (event.request.headers.get('accept').includes('text/html')) {
                    return caches.match(OFFLINE_URL);
                }
            });
        })
    );
});
