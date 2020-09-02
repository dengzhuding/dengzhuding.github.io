// 执行相关初始化脚本，监听相关事件

const _header = document.getElementsByTagName('header')[0];
const _main = document.getElementsByTagName('main');
const timers = {
  window_scroll: null
}

// 设置header class
const setHeaderClass = () => {
  console.log('main scroll.')
  const top = window.scrollY;
  const toBottomHeight = document.documentElement.scrollHeight - Math.min(document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.scrollTop;
  if (top && toBottomHeight <= 80) {
    console.log(toBottomHeight)
    return
  }
  // position: static;不做计算
  if (_header.classList.contains('static')) {
    return
  }
  if (!top) {
    _header.classList.add('height-120');
    _header.classList.remove('height-60', 'height-40');
  } else {
    _header.classList.add('height-40');
    _header.classList.remove('height-60', 'height-120');
  }
}
// window scroll事件
const mainScrollEvent = event => {
  setHeaderClass();
  // if (timers.window_scroll) {
  //   window.clearTimeout(timers.window_scroll);
  // }
  // timers.window_scroll = window.setTimeout(setHeaderClass, 50);
}

// 添加监听
const initListeners = () => {
  /* Feature detection */
  /*特诊检测*/
  var passiveIfSupported = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveIfSupported = { passive: true }; } }));
  } catch(err) {}
  // scroll
  window.addEventListener('scroll', mainScrollEvent, passiveIfSupported)
  // 添加header右上角图标点击事件，是否固定显示header
  const _thumbtack = document.querySelector('header .header-thumbtack')
  _thumbtack.addEventListener('click', (event) => {
    console.log(event && event.target)
    const curIsActive = _thumbtack.classList.contains('active')
    if (curIsActive) {
      _thumbtack.classList.remove('active')
      _header.classList.add('static')
    } else {
      _thumbtack.classList.add('active')
      _header.classList.remove('static')
    }
  })
}

// onLoad初始化
const load = () => {
  // main标签scroll事件处理
  initListeners();
}

window.onload = load