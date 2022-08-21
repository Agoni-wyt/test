<!-- 例如：创建一个新的文件（getphoneinfo.php）来进行第三方接口的调用： -->

<?php

//在php中,获取一个链接中的数据
//设置编码
header("content-Type: text/plain; charset=utf-8");
$phoneNumber = $_GET["mobile"];
//使用curl进行随络数据访问
$ch = curl_init();
//网络访问的url地址
$url = "http: //xxx".$phoneNumber;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//执行HTTP请求
curl_setopt($ch, CURLOPT_URL, $url);
//得到数据
$res = curl_exec($ch);
echo $res;

?>