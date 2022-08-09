/**
 * 注册service worker
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', {
        // scope: './',
        updateViaCache: 'none' // 设置客户端对待服务器脚本的方式为-永不缓存
      })
      .then(registration => console.log('Service worker registration succeeded'))
      .catch(error => console.log('Service worker registration failed:', error));
  });
}