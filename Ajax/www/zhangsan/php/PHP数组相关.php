<?php
    /* $arr = array();//数组定义
    $arr[0] = "zhangsan";
    $arr[1] = "lisi";
    $arr[2] = "wangwu";
    echo $arr[0];//echo后面只能写字符串,不能输出复杂类型
    echo $arr[1];
    echo $arr[2];
    echo "<br>";
    print_r($arr);//print-t可以输出复杂类型
    var_dump($arr);//var-dump可以输出复杂类型

    $result = json_encode($arr);//将数组转化为json格式的字符串
    echo $result; */

    $arr1 = array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
    var_dump($arr1);
    echo $arr1["name2"];//数组下标索引可以自定义

    //二维数组
    $arr2 = array();
    $arr2["zhangsan"] = array("age"=>19,"sex"=>"male","height"=>"180");
    $arr2["lisi"] = array("age"=>18,"sex"=>"famale","height"=>"160");
    $arr2["wangwu"] = array("age"=>15,"sex"=>"male","height"=>"190");

    var_dump($arr2);
    
    $result2 = json_encode($arr2);
    echo $result2;//{"zhangsan":{"age":19,"sex":"male","height":"180"},"lisi":{"age":18,"sex":"famale","height":"160"},"wangwu":{"age":15,"sex":"male","height":"190"}} 
    echo "<br>";

    //数组遍历
    $arr3 = array("zhangsan","lisi","wangwu");
    for ($i=0; $i < count($arr3); $i++) { 
        $temp = $arr3[$i];
        echo $temp . "<br>";
    }/* zhangsan
    lisi
    wangwu */

    $arr4 = array("name1"=>"zhangsan","name2"=>"lisi","name3"=>"wangwu");
    foreach ($arr4 as $key => $value) {
        echo $key.">>>".$value."<br>";
    }/* name1>>>zhangsan
    name2>>>lisi
    name3>>>wangwu */





?>