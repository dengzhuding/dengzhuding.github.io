/**
 * service workers
 * 在app.js中注册
 * 
 * self: ServiceWorkerRegistration
 */

/**  */
self.addEventListener('statechange', ({target: {state}}) => {
  console.log('state change to - ', state);
});

// 传给caches.open方法的关键字符串
const CACHE_KEY = 'v1.20220809';
/**
 * 在install时间中缓存资源
 * 
 */
self.addEventListener('install', (installEvent) => {
  console.log('[Service Worker] Install');
  installEvent.waitUntil(
    caches.open(CACHE_KEY)
    .then(cache => {
      cache.addAll([
        '/css/normalize.css',
        '/css/style.css',

        '/js/init.js',
        '/js/imagePreview.js',
        '/js/intersection-observer.js',

        '/images/blog-LOGO.svg',

        '/favicon.ico',
        '/manifest.json',
        '/images/blog-LOGO144x144.png'
      ])
    })
    // 跳过waiting状态(就是installed生命周期),会触发activate事件
    .then(() => self.skipWaiting())
  )
});

/**
 * 强制服务工作者线程接管客户端，这会在每个客户端触发controllerchange事件
 */
self.addEventListener('activate', activateEvent => clients.claim());

/**
 * @param {FetchEvent} event 
 */
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request)
    .then(response => response || fetch(fetchEvent.request))
    .catch((err) => console.error(err))
  );
});
