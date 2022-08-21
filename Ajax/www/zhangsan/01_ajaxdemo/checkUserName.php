<?php

    $uname = $_GET["username"];
    // 、、后端工作
    //按道理说，应该查询数据库
    if($uname == "zhangsan" ){
        echo "error";
    }else{
        echo "ok";
    }

?>