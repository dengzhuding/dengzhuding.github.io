/*
* 使用说明：在页面中引入本js文件前设置window._imagePreview_selector = 'body images'(此值为需要应用此功能的选择字符串值)，已自动监听load事件。
*/
(function (imgSelectorStr) {
    // 添加html
    function addModel() {
        const templateStr = `
                <div class="img-content">
                    <img src="" class="preview-img" draggable="true" style="position: relative; transition: all 0.2s ease 0s;">
                </div>
            `;
        const styleStr = `
            <style type="text/css"></style>
        `
        const modal = document.createElement('div');
        modal.id = 'image-model-div';
        modal.innerHTML = templateStr;
        document.body.append(modal);
    }
    // 获取元素model,img
    function getModelElObj() {
        let $el = document.getElementById('image-model-div');
        if (!$el) {
            try {
                addModel();
            } catch (e) {
                console.error(e && e.message);
                return null
            }
            $el = document.getElementById('image-model-div');
            let img = $el.getElementsByClassName('preview-img')[0];
            // 单击图片外的遮罩关闭
            $el.addEventListener('click', closeModel);
            // 单击图片阻止冒泡（阻止关闭）
            img.addEventListener('click', (event) => {
                event.stopPropagation();
            })
            // 双击图片关闭
            img.addEventListener('dblclick', closeModel);
            // 拖拽开始位置
            let previousX = 0;
            let previousY = 0;
            let start = false;
            img.addEventListener("dragstart", function( event ) {
                previousX = event.clientX;
                previousY = event.clientY;
                start = true;
                // console.log(event.clientX, event.clientY)
                // console.log('start')
            }, false);
            // 图片拖拽,事件捕获阶段监听
            img.addEventListener('drag', throttle((event) => {
                if (!start) {
                    return
                }
                let leftNum = parseFloat(img.style.left || 0) + event.clientX - previousX;
                img.style.left = leftNum + 'px';
                previousX = event.clientX;
                
                let topNum = parseFloat(img.style.top || 0) + event.clientY - previousY;
                img.style.top = topNum + 'px';
                previousY = event.clientY;
                // console.log(event.clientX, event.clientY)
            }, 100)); 
            img.addEventListener("dragend", function( event ) {
                previousX = 0;
                previousY = 0;
                start = false;
                // console.log('end')
                // console.log(event.clientX, event.clientY)
            }, false);
        }
        return {
            $el,
            img: $el.getElementsByClassName('preview-img')[0]
        };
    }
    // 图片缩放比例
    let scale = 1;
    function zoomImg(event) {
        // event.preventDefault();
        if (event.deltaY < 0) {
            // 放大
            scale += event.deltaY * -0.001;
        }
        else {
            // 缩小
            scale -= event.deltaY * 0.001;
        }
        // 限制缩放
        scale = Math.min(Math.max(.125, scale), 4);
        const elObj = getModelElObj();
        if (!elObj) {
            return
        }
        // 应用缩放过渡效果
        elObj.img.style.transform = `scale(${scale})`;
    }
    // 打开model
    function openModel(event) {
        const elObj = getModelElObj();
        if (!elObj) {
            return
        }
        elObj.img.src = event.target.src;
        elObj.$el.classList.add('show');
        document.body.parentElement.classList.add('overflow-hidden');
        elObj.$el.dataset.show = true;
        // 滑动滚轮缩放
        document.addEventListener('wheel', zoomImg);
        // 重制缩放比例
        scale = 1;
        elObj.img.style.transform = `scale(${scale})`;
        elObj.img.style.left = '0';
        elObj.img.style.top = '0';
    }
    // 
    // 关闭model
    function closeModel(event) {
        const elObj = getModelElObj();
        if (!elObj) {
            return
        }
        elObj.$el.classList.remove('show');
        document.body.parentElement.classList.remove('overflow-hidden');
        elObj.$el.dataset.show = false;
        // 移除滑动滚轮缩放
        document.removeEventListener('wheel', zoomImg);
    }
    // 初始换监听
    function addListener() {
        const selector = imgSelectorStr || (typeof window._imagePreview_selector === 'string' && window._imagePreview_selector);
        const $imgs = Array.from(document.querySelectorAll(selector));
        if (!$imgs.length) {
            return
        }
        $imgs.forEach($img => {
            $img.addEventListener('click', openModel);
        })
        // 监听model点击关闭model
    }
    function clearListener() {}
    window.addEventListener('load', addListener);
    window.addEventListener('unload', clearListener);

})('article img'/* param: imgSelectorStr - 图片选择字符串 */)