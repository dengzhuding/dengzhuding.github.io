// 执行相关初始化脚本，监听相关事件

// 相关页面元素
const _header = document.getElementsByTagName('header')[0];
const _main = document.getElementsByTagName('main');
const _menu = document.querySelector('header nav .menu');

// 存放媒体查询
const widthMediaQueryObj = {
  value: null,
  hander (event) {
    // 小屏幕
    const obj = widthMediaQueryObj
    if (event.matches && !obj.menuHeight) {
      obj.menuHeight = _menu.scrollHeight;
      obj.menuHeightClass = 'height-' + obj.menuHeight;
      if (obj.menuHeight) {
        // 添加动态样式
        _menu.classList.add('height-0');
        const style = document.createElement('style');
        style.type = 'text/css';
        const styleStr = `.${obj.menuHeightClass}{height: ${obj.menuHeight}px !important;}` 
        try {
          style.appendChild(document.createTextNode(styleStr));
        } catch (ex) {
          style.styleSheet.cssText = styleStr;//针对IE
        }
        const _head = document.getElementsByTagName('head')[0];
        _head.appendChild(style);
      }
    }
    // 大屏幕
    if (!event.matches) {
      _menu.classList.remove('height-0', widthMediaQueryObj.menuHeightClass || 'xxxx');
    } else if (!_menu.clientHeight && !_menu.classList.contains('height-0')) {
      _menu.classList.add('height-0');
    }
    console.log('event.matches', event.matches);
  },
  // 添加screen width监听
  addListener () {
    this.value = window.matchMedia('(max-width: 1024px)');
    this.hander(this.value);
    this.value.addListener(this.hander);
  },
  removeListener () {
    if (this.value && this.value.removeListener) {
      this.value.removeListener(this.hander);
    }
  },
  menuHeight: 0,
  menuHeightClass: ''
};

// 存放计时器
const timers = {
  window_scroll: null
}

// 设置header class
const setHeaderClass = () => {
  // console.log('main scroll.')
  const top = window.scrollY;
  const toBottomHeight = document.documentElement.scrollHeight - Math.min(document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.scrollTop;
  if (top && toBottomHeight <= 80) {
    // console.log(toBottomHeight)
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
  window.addEventListener('scroll', mainScrollEvent, passiveIfSupported);
  // 添加header右上角图标点击事件，是否固定显示header
  const _thumbtack = document.querySelector('header .header-thumbtack');
  _thumbtack.addEventListener('click', (event) => {
    const curIsActive = _thumbtack.classList.contains('active');
    if (curIsActive) {
      _thumbtack.classList.remove('active');
      _header.classList.add('static');
      _header.classList.add('height-120');
      _header.classList.remove('height-60', 'height-40');
    } else {
      _thumbtack.classList.add('active');
      _header.classList.remove('static');
    }
  })

  // 添加媒体查询监听
  widthMediaQueryObj.addListener();

  const _navShowBarIcon = document.querySelector('header .nav-show-bar');
  _navShowBarIcon.addEventListener('click', (event) => {
    if (widthMediaQueryObj && widthMediaQueryObj.value && widthMediaQueryObj.value.matches) {
      if (_menu.clientHeight) {
        _menu.classList.remove(widthMediaQueryObj.menuHeightClass || 'xxxx');
        _menu.classList.add('height-0');
      } else {
        _menu.classList.remove('height-0');
        _menu.classList.add(widthMediaQueryObj.menuHeightClass || 'xxxx');
      }
    } else {
      _menu.classList.remove('height-0', widthMediaQueryObj.menuHeightClass || 'xxxx');
    }
    console.log('click')
  })
}

// onLoad初始化
const load = () => {
  // main标签scroll事件处理
  initListeners();
}
const unload = () => {
  // 移除媒体查询监听
  widthMediaQueryObj.removeListener();
}
window.onload = load;
window.unload = unload;