/**
 * 广告控制
 */
(function () {
  const adsOpenStatus = localStorage.getItem('googole-ads-open');
  if (adsOpenStatus !== 'true') {
    return;
  }
  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5071251895443211';
  document.querySelector('head').appendChild(s);
})()