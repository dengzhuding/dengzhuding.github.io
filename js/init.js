// 执行相关初始化脚本，监听相关事件

const mainScrollEvent = event => {
  console.log('main scroll.')
}

const initListeners = () => {
  const _main = document.getElementsByTagName('main');
  /* Feature detection */
  /*特诊检测*/
  var passiveIfSupported = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveIfSupported = { passive: true }; } }));
  } catch(err) {}

  window.addEventListener('scroll', mainScrollEvent, passiveIfSupported)
}

// onLoad初始化
const load = () => {
  // main标签scroll事件处理
  initListeners();
}

window.onload = load