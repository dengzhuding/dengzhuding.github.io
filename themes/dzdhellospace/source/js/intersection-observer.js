/**
 * Intersection Observer API 会注册一个回调函数，每当被监视的元素进入或者退出另外一个元素时(或者 viewport )，或者两个元素的相交部分大小发生变化时，该回调方法会被触发执行。
 * 这样，我们网站的主线程不需要再为了监听元素相交而辛苦劳作，浏览器会自行优化元素相交管理。
 *
 * 使用Intersection Observer API控制可视title出现时给目录显示正确的状态
 */
(function () {
  const options = {
    // 未指定或者为null，则默认为浏览器视窗。
    root: null,
    // 根(root)元素的外边距
    rootMargin: '0px',
    // 可以是单一的 number 也可以是 number 数组，target 元素和 root 元素相交程度达到该值的时候 IntersectionObserver 注册的回调函数将会被执行
    threshold: [0.0, 1.0]
  }
  // 收集观察元素
  const visibilityByElement = new Map();
  // 管理观察元素
  const mangeVisibility = entries => {
    for (const item of entries) {
      visibilityByElement.set(item.target, item.isIntersecting);
    }
  }
  // 当前第一个可见元素active-link
  let activeTocLink = null;
  // 设置第一个可见元素
  const mangeFirstVisibleElement = () => {
    const visibleElements = Array.from(visibilityByElement.entries())
      .filter(([, value]) => value)
      .map(([key]) => key);
    if (visibleElements.length) {
      const firstVisibleElements = visibleElements[0];
      const firstTocLink = document.querySelector('.article-toc-div').querySelector(`[href="#${encodeURIComponent(firstVisibleElements.attributes.id.value)}"]`)
      if (firstTocLink) {
        if (activeTocLink !== null && activeTocLink !== firstTocLink) {
          activeTocLink.classList.remove('active');
        }
        activeTocLink = firstTocLink;
        activeTocLink.classList.add('active');
      }
      // console.log(firstVisibleElements.attributes.id)
    }
  }
  const callback = (entries, observer) => {
    // 这里参考https://developer.mozilla.org/ 管理可见标题元素
    mangeVisibility(entries);
    mangeFirstVisibleElement();
    // console.log('change', entries)
  }
  let observer = new IntersectionObserver(callback, options);
  const targetElements = [];
  const tocItems = document.querySelectorAll('.article-toc-div .toc-item');
  if (!tocItems.length) {
    return;
  }
  tocItems.forEach(item => {
    // 获取观测目标元素
    let el = document.getElementById(decodeURIComponent(item.firstChild.attributes.href.value).slice(1));
    observer.observe(el);
  })
})()