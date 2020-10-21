// 执行相关初始化脚本，监听相关事件

// common 方法

/**
 * @description 节流工具函数
 * @param func 执行函数
 * @param waitTime 防抖等待时间
 * @param mustRunTime 节流时间，即执行的最小频率
 */
function throttle (func, waitTime, mustRunTime) {
}

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
  console.log('top: ', top)
  if (!top) {
    _header.classList.add('height-120');
    _header.classList.remove('height-60', 'height-40');
  } else {
    _header.classList.add('height-40');
    _header.classList.remove('height-60', 'height-120');
  }
}

// 添加back to top按钮
function addBackToTop () {
  var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    , t = o.id
    , e = void 0 === t ? "back-to-top" : t
    , n = o.showWhenScrollTopIs
    , i = void 0 === n ? 1 : n
    , r = o.onClickScrollTo
    , d = void 0 === r ? 0 : r
    , c = o.scrollDuration
    , a = void 0 === c ? 100 : c
    , s = o.innerHTML
    , l = void 0 === s ? '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>' : s
    , u = o.diameter
    , m = void 0 === u ? 56 : u
    , p = o.size
    , b = void 0 === p ? m : p
    , h = o.cornerOffset
    , v = void 0 === h ? 20 : h
    , f = o.backgroundColor
    , x = void 0 === f ? "#000" : f
    , w = o.textColor
    , g = void 0 === w ? "#fff" : w
    , k = o.zIndex
    , y = void 0 === k ? 1 : k
    , opacity = o.opacity || 1;
  !function() {
      var o = Math.round(.43 * b)
        , t = Math.round(.29 * b)
        , n = "#" + e + "{background:" + x + ";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:" + v + "px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:" + g + ";cursor:pointer;display:block;height:" + b + "px;opacity: " + opacity + ";outline:0;position:fixed;right:" + v + "px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:" + b + "px;z-index:" + y + "}#" + e + " svg{display:block;fill:currentColor;height:" + o + "px;margin:" + t + "px auto 0;width:" + o + "px}#" + e + ".hidden{bottom:-" + b + "px;opacity:0}"
        , i = document.createElement("style");
      i.appendChild(document.createTextNode(n)),
      document.head.insertAdjacentElement("afterbegin", i)
  }();
  var T = function() {
      var o = document.createElement("div");
      return o.id = e,
      o.className = "hidden",
      o.innerHTML = l,
      o.addEventListener("click", function(o) {
          o.preventDefault(),
          function() {
              var o = window
                , t = o.performance
                , e = o.requestAnimationFrame;
              if (a <= 0 || void 0 === t || void 0 === e)
                  return C(d);
              var n = t.now()
                , i = M()
                , r = i - d;
              e(function o(t) {
                  var d = t - n
                    , c = Math.min(d / a, 1);
                  C(i - Math.round(c * r)),
                  c < 1 && e(o)
              })
          }()
      }),
      document.body.appendChild(o),
      o
  }()
    , E = !0;
  window.addEventListener("scroll", z),
  z();
  function z() {
      M() >= i ? function() {
          if (!E)
              return;
          T.className = "",
          E = !1
      }() : function() {
          if (E)
              return;
          T.className = "hidden",
          E = !0
      }()
  }
  function M() {
      return document.body.scrollTop || document.documentElement && document.documentElement.scrollTop || 0
  }
  function C(o) {
      document.body.scrollTop = o,
      document.documentElement && (document.documentElement.scrollTop = o)
  }
}

// window scroll事件
const mainScrollEvent = event => {
  // 设置header高度
  setHeaderClass();
  // if (timers.window_scroll) {
  //   window.clearTimeout(timers.window_scroll);
  // }
  // timers.window_scroll = window.setTimeout(setHeaderClass, 50);
  
  // 设置文章当前标题位置
}

// 添加监听
const initListeners = () => {
  /* Feature detection */
  /*特诊检测*/
  // 是否 listener 永远不会调用 preventDefault()
  let passiveIfSupported = false;
  // 是否 listener 在添加之后最多只调用一次
  let onceSupported = false;
  try {
    let testoOption = {};
    Object.defineProperty(testoOption, "passive", { get: function() { passiveIfSupported = { passive: true }; } })
    Object.defineProperty(testoOption, "once", { get: function() { onceSupported = { once: true }; } })
    window.addEventListener("test", null, testoOption);
  } catch(err) {}
  // scroll
  window.addEventListener('scroll', mainScrollEvent, passiveIfSupported);
  // 添加header右上角图标点击事件，是否固定显示header
  const _thumbtack = document.querySelector('header .header-thumbtack');
  _thumbtack && _thumbtack.addEventListener('click', (event) => {
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
  // 切换导航栏状态，hidden-是否设置隐藏
  const navShowBarClickHander = (event, hidden) => {
    if (widthMediaQueryObj && widthMediaQueryObj.value && widthMediaQueryObj.value.matches) {
      if (_menu.clientHeight || hidden) {
        _menu.classList.remove(widthMediaQueryObj.menuHeightClass || 'xxxx');
        _menu.classList.add('height-0');
        if (!onceSupported) {
          document.removeEventListener('click', windowClickHanderToggle, onceSupported)
        }
      } else {
        _menu.classList.remove('height-0');
        _menu.classList.add(widthMediaQueryObj.menuHeightClass || 'xxxx');
        // 添加单次点击事件
        event.stopPropagation();
        document.addEventListener('click', windowClickHanderToggle, onceSupported)
      }
    } else {
      _menu.classList.remove('height-0', widthMediaQueryObj.menuHeightClass || 'xxxx');
      if (!onceSupported) {
        document.removeEventListener('click', windowClickHanderToggle, onceSupported)
      }
    }
  }
  // document单次点击
  const windowClickHanderToggle = (event) => {
    console.log('document click.')
    navShowBarClickHander(null, true);
  }
  _navShowBarIcon.addEventListener('click', navShowBarClickHander);
}

const unload = () => {
  // 移除媒体查询监听
  widthMediaQueryObj.removeListener();
}
// window.onload = load;
document.addEventListener('DOMContentLoaded', (event) => {
  // main标签scroll事件处理
  initListeners();
});
window.unload = unload;
// 添加back to top按钮
addBackToTop({backgroundColor: '#4a66b2', opacity: 0.65});