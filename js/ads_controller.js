/**
 * ads_controller.js
 * 广告控制
 */
(function () {
  const adsOpenStatus = localStorage.getItem('googole-ads-open');
  if (adsOpenStatus !== 'true') {
    return;
  }

  const head = document.querySelector('head');

  // 未填充的广告位置设置隐藏
  const ads_css = document.createElement('style');
  ads_css.innerHTML = `
    ins.adsbygoogle[data-ad-status="unfilled"] {
      display: none !important;
    }`;
  head.appendChild(ads_css);
  
  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5071251895443211';
  head.appendChild(s);

  // test-unit-ads 
  let ins_str = `<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5071251895443211"
     data-ad-slot="7161676001"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>`;
  const adsDiv = document.querySelector('.ads-div');
  if (!adsDiv) {
    return;
  }
  adsDiv.innerHTML = ins_str;
  (adsbygoogle = window.adsbygoogle || []).push({});
})()