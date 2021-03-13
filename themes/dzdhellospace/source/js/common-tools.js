/**
 * @description 复制传入元素的内容
 * @param {Element} ele 需要复制内容的元素
 * @returns {Promise}
 */
const execCopy = (ele) => {
  return new Promise((resolve, reject) => {
    if (!ele || !(ele instanceof Element)) {
      reject('传入参数不是Element实例！');
      return
    }
    let str = ele.innerText.trim();
    const textAreaEl = document.createElement('textArea');
    textAreaEl.style.display = 'fixed';
    document.body.appendChild(textAreaEl);
    textAreaEl.value = str;
    textAreaEl.select();
    let copyResult = false
    try {
      copyResult = document.execCommand('copy')
      if (!copyResult) {
        throw('复制失败！')
      }
    } catch (e) {
      reject(e);
    }
    document.body.removeChild(textAreaEl);
    if (!copyResult) {
      return
    }
    resolve('复制成功')
  });
}