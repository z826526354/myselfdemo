/**
 * 立即执行函数，因为使用者不需要得到任何东西
 */
var setSelectVal = (function () {
    // 找到所有需要美化的下拉列表
    var sels = document.querySelectorAll("select[data-beauty]");
    for (var i = 0; i < sels.length; i++) {
        var sel = sels[i];
        beautifySelect(sel);
    }

    /**
     * 美化单个下拉列表
     * @param sel 要美化的下拉列表
     */
    function beautifySelect(sel) {
        //1. 隐藏下拉列表
        sel.style.display = "none"; //css也可以隐藏
        //2. 生成div
        var div = document.createElement("div");
        div.className = "beauty-select";
        // 给div加入内容
        setContent(div, sel);
        sel.parentNode.insertBefore(div, sel);

        //3. 真实的下拉列表改变事件
        sel.onchange = function () {
            setDivValue(div, sel);
        }

        //4. value的点击事件
        var divBeautyValue = div.querySelector(".beauty-value");
        divBeautyValue.onclick = function () {
            if (div.classList.contains("expand")) { //如果外层div包含了expand样式
                div.classList.remove("expand"); //移除样式
            }
            else {
                div.classList.add("expand"); //添加样式
            }
        }

        //5. li的点击事件
        var lis = div.querySelectorAll(".beauty-options li");
        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            li.onclick = function () {
                //1. 设置sel的选中项变为当前点击li的值
                sel.value = this.dataset.value;
                //2. 调用setDivValue
                setDivValue(div, sel);
                //3. 触发值的点击事件
                divBeautyValue.click();
            }
        }
    }

    /**
     * 根据下拉列表，重新设置div的状态
     * @param {*} div 
     * @param {*} sel 
     */
    function setDivValue(div, sel) {
        var op = getSelectedOption(sel); //得到选中的option
        if (op) {
            var span = div.querySelector(".beauty-value span");
            span.innerHTML = op.innerHTML;
        }
        var opts = sel.querySelectorAll("option");
        var lis = div.querySelectorAll(".beauty-options li");
        //lis 和 opts 是对应的
        for (var i = 0; i < opts.length; i++) {
            var op = opts[i];
            if (op.selected) {
                lis[i].classList.add("active");
            }
            else {
                lis[i].classList.remove("active");
            }
        }
    }

    /**
     * 参考下拉列表sel中的内容，为div添加内容
     * @param {*} div 
     * @param {*} sel 
     */
    function setContent(div, sel) {
        var op = getSelectedOption(sel); //得到当前的选中项
        var html = `
        <div class="beauty-value">
            <span>${op ? op.innerHTML : ""}</span>
            <i class="iconfont iconsanjiaoxing"></i>
        </div>
        `;
        html += `<ul class="beauty-options">`;
        //生成li
        var opts = sel.querySelectorAll("option"); //得到下拉列表所有的选项
        for (var i = 0; i < opts.length; i++) {
            var op = opts[i];
            html += `<li data-value="${op.value}" class="${op.selected ? "active" : ""}">${op.innerHTML}</li>`;
        }

        html += "</ul>";
        div.innerHTML = html;
    }

    /**
     * 得到下拉列表当前的选中的option
     * @param {*} sel 
     */
    function getSelectedOption(sel) {
        var opts = sel.querySelectorAll("option");
        for (var i = 0; i < opts.length; i++) {
            var op = opts[i];
            if (op.selected) {
                return op;
            }
        }
    }

    /**
      * 手动设置下拉列表的值
      * @param sel 要设置值的下拉列表
      * @param value 要设置的选中值
      */
    function setSelectVal(sel, value) {
        sel.value = value;
        var div = sel.previousElementSibling;
        if (!div) {
            return;
        }
        setDivValue(div, sel);
    }


    return setSelectVal;

}());


