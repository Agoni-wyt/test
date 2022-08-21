 
$(window).on("load", function () {//onload在document ready之前,ready的时候再去设置事件就不会触发了
    $(document).ready(function () {
        ImgLocation();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }] };
        $(window).scroll(function () {
            //获取最后一张图片距离顶端的高度-他自身的一半
            if (getSideHeight()) {
                $.each(dataImg.data, function (index, value) {
                    var pin = $("<div>").addClass("pin").appendTo("#main");
                    var box = $("<div>").addClass("box").appendTo(pin);
                    var img = $("<img>").attr("src", "D:/ps class/前端学习/JQuery/瀑布流/image/" + $(value).attr("src")).appendTo(box);

                })
                ImgLocation();
            }
        })
    })
});
/* $(document).ready 和 window.onload 如果同时写在一个页面上，两个方法的执行顺序是不一样的。

在jQuery3.0.0版本之前的版本中，$(document).ready会先于window.onload执行

在jQuery3.0.0版本及之后的版本中，window.onload先执行 */
/* 请注意，尽管 DOM 始终在页面完全加载之前准备就绪，但在处理程序期间执行的代码中附加事件侦听器通常是不安全的。例如，可以使用诸如 之类的方法在页面加载后很长一段时间内动态加载脚本。尽管 添加的处理程序将始终在动态加载的脚本中执行，但 的事件已经发生，并且这些侦听器将永远不会运行。load.ready()$.getScript().ready()windowload */


function getSideHeight() {
    var box = $(".pin");
    var lastImgHeight = (box.last(), get(0)).offsetTop - Math.floor(box.last().height() / 2);
    var documentHeight = $(document).height();//获取当前窗口的一个高度
    var scrollHeight = $(window).scrollTop();//获取滚动的距离
    return (lastImgHeight < documentHeight + scrollHeight) ? true : false;
}

function ImgLocation() {
    var box = $(".pin");//返回一个数组
    var boxWidth = box.eq(0).width();//每张图片宽度
    var num = Math.floor($(window).width() / boxWidth);//一行能拜访图片的个数（floor去整）
    var numArr = [];
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();//获取每张图片的高度
        if (index < num) {//第一排
            numArr[index] = boxHeight;
        } else {//第二排
            var minboxHeight = Math.min.apply(numArr, numArr);//获取最小高度
            // jquery.inArray(value,数组,数组的索引值 0)
            var minIndex = $.inArray(minboxHeight, numArr);//最小高度索引值
            $(value).css({
                position: "absolute",
                top: minboxHeight,
                left: box.eq(minIndex).position().left
            });
            numArr[minIndex] += box.eq(index).height();//新高度



        }
    })
}