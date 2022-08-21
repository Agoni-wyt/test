<?php
    $city = $_GET["city"];
    if($city == "beijing"){
        echo "foo('北京的天气晴')";
    }else{
        echo "foo('没有查询到天气信息')";
    };
// echo "var str = 'hahah'";
// echo "foo(123)";
?>