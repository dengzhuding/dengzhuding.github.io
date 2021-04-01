/*
* 使用说明：在页面中引入本js文件前设置window._imagePreview_selector = 'body images'(此值为需要应用此功能的选择字符串值)，已自动监听load事件。
*/
(function (imgSelectorStr) {
    // 添加html
    function addModel() {
        const templateStr = `
            <div id="image-model-div" class="">
                <div class="img-content">
                    <img src="" class="preview-img">
                </div>
            </div>
            `;
        const styleStr = `
            <style type="text/css"></style>
        `
        document.body.append(templateStr);
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
        }
        return {
            model: $el,
            img: $el.getElementsByClassName('preview-img')[0]
        };
    }
    // 打开model
    function openModel(event) {
        const elObj = getModelElObj();
        if (!elObj) {
            return
        }
        elObj.$el.classList.add('show');
        elObj.$el.dataset.show = true;
    }
    // 
    // 关闭model
    function closeModel(event) {
        const elObj = getModelElObj();
        if (!elObj) {
            return
        }
        elObj.$el.classList.remove('show');
        elObj.$el.dataset.show = false;
    }
    // 初始换监听
    function addListener() {
        const selector = imgSelectorStr || (typeof window._imagePreview_selector === 'string' && window._imagePreview_selector);
        const $imgs = Array.from(document.querySelectorAll(selector));
        if (!$imgs.length) {
            return
        }
        $imgs.forEach($img => {
            $img.document.addEventListener('click', openModel);
        })
        // 监听model点击关闭model
    }
    function clearListener() {}
    document.addEventListener('load', addListener);
    document.addEventListener('unload', clearListener);

})('article img'/* param: imgSelectorStr - 图片选择字符串 */)