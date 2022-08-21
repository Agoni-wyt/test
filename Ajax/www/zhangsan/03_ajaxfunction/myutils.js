/* <script type="text/javascript" src="myutils.js"></script> */
/* 参数默认值，和参数顺序改变 */

function myAjax(type, url, params, datatype, callback, async) {//保证params和callback存在
    //1 2 3 4
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (type == "get") {
        if (params && params != "") {
            url += "?" + params;
        }


    }
    xhr.open(type, url, async);

    if (type == "get") {
        xhr.send(null);
    } else if (type == "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(params);
    }
    if (async) {//异步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = null;
                    if (datatype == "josn") {
                        result = xhr.responseText;
                        result = JSON.parse(result);
                    } else if (datatype == "XML") {
                        result = xhr.responerXML;
                    } else {
                        result = xhr.responseText;
                    }

                    if (callback) {
                        allback(result);
                    }


                }
            }
        }
    } else {//同步
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = null;
                if (datatype == "josn") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (datatype == "XML") {
                    result = xhr.responerXML;
                } else {
                    result = xhr.responseText;
                }

                if (callback) {
                    allback(result);
                }


            }
        }
    }



}



/* obj = {
    url: "xxx",
    type: "get",
    datatype: "josn",
    data: {
        uname: "zhangsan",
        age: "18"
    },
    success: function () { }
};

obj.url;
obj.type; */

function myAjax2(obj) {
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



