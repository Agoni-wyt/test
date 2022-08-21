<?php
/* PHP中的函数
A、系统函数:系统已经写好的函数，可以进行直接调用的函数
a)   json_encode php 中将数组转化为json格式的字符串,
b)   var_dump输出复杂的数据类型,
c)   print_r输出复杂的数据类型
d)   count得到数组的长度 

自定义函数：
需要自己进行函数方法的实现和js 类似，以function进行声明。                               */

$arr = array("zhangsan","lisi","wangwu");
print_r($arr);
var_dump($arr);

$result = json_encode($arr);
$count = count($arr);
echo $result;

$addResult = add(2,3);
echo "计算结果为：".$addResult;

function add($num1,$num2){
    return $num1+$num2;
}

?>