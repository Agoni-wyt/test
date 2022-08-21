<?php
    echo "<h1>Helloworld PHP</h1>";
    echo "<br>";
    $str = "hello";
    echo $str;
    echo "<br>";
    // 一、 变量的声明和使用:无论是变量的声明还是变量的使用都需要用$符号。

    $num1 = 100;
    $num2 = 200;
    $result = $num1 + $num2;
    echo $result;
    echo "<br>";
    
    $str2 = " how are you?";
    $str3 = $str ." " .$str2;
    echo "字符串拼接为：".$str3;
    // 在php中，字符串拼接用 . 

    // 浏览器是不识别PHP代码的，PHP代码必须在服务器中执行，双击打开php是达不到效果的
    /*wamp是 windows.apache .mysql、php几个服务器软件的缩写,类似的还有 Lamp:Windows指的是操作系统，Apache提供的*是网页的服务，同样的Apache也无法识别PHP相关的语法，在举的这几个例子当中只有PHP模块能够识别PHP相关的语法。

    其实，用户在请求test.php页面时访问的是Apache提供的服务，Apache会向PHP模块调用相应的服务来解析PHP语法。在PHP模块解析完之后，会将解析完的数据提供给Apache模块，而Apache模块则会整理出一套完整的页面返回给个人电脑。 */
?>