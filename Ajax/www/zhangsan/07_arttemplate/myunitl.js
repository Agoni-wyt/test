
/* obj = {
    url: "https://suggest.taobao.com/sug",
    data: {
        q: "123",
        pwd: "123456"
    },//q=123&pwd=123456
    success: function (data) { }
}
 */

// 跨域数据的datatype一定要是jsonp
function myAjax(obj){
    if(obj.datatype == "jsonp"){
        myAjax4Across(obj);
    }else {
        myAjax4Normal(obj);
    }
}




//获取跨域数据
function myAjax4Across(obj) {
    var defaults = {
        url: "#",
        data: {},
        success: function (data) { },
        jsonp: "callback",//回调key值
        jsonpCallback: "hehe"
    };
    for (var key in obj) {
        defaults[key] = obj[key];
    }
    var params = "";
    for (var attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
        defaults.url += "?" + params;
    }
    defaults.url += "&" + defaults.jsonp + "=" + defaults.jsonpCallback;
    console.log(defaults.url);

    var script = document.createElement("script");
    script.src = defaults.url;

    window[defaults.jsonpCallback] = function (data) {
        defaults.success(data);
    };

    var head = document.querySelector("head");
    head.appendChild(script);



}
//获取同源数据
function myAjax4Normal(obj) {
    /* 将参数作为对象 */
    var defaults = {
        type: "get",
        url: "#",
        datatype: "json",
        data: {},
        async: true,//异步
        success: function (result) { console.log(result) }

    };

    // obj中的属性，覆盖到defaults中的属性
    // 如果一些属性只存在obj中，会给defaults中增加属性
    // 如果有一些属性在obj和defaults中都存在，会将defaults中的默认值覆盖
    // 如果有一些属性只在defaults中存在，在obj中不存在，这时候defaults中将保留预定义的值
    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 得到params
    /* data = {
        uname:"zhangsan",
        age:"18"
    }//uname=zhangsan$age=18 */
    var params = "";
    for (var attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
    }
    if (defaults.type == "get") {
        defaults.url += "?" + params;
    }
    xhr.open(defaults.type, defaults.url, defaults.async);

    if (defaults.type == "get") {
        xhr.send(null);
    } else if (defaults.type == "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(params);
    }

    if (defaults.async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (defaults.datatype == "json") {
                        result = xhr.responseText;
                        result = JSON.parse(result);
                    } else if (defaults.datatype == "xml") {
                        result = xhr.responerXML

                    } else {
                        result = xhr.responseText;
                    }
                    defaults.success(result);

                }
            }
        }

    } else {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (defaults.datatype == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (defaults.datatype == "xml") {
                    result = xhr.responerXML

                } else {
                    result = xhr.responseText;
                }
                defaults.success(result);

            }
        }
    }



}