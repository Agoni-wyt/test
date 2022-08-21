<?php
/* check.php是用来做用户名和密码的校验。 
check.php 要做的事情是获取到用户所输入的用户名和密码进行校验的工作*/
    // echo "sheckUsername";
    //对应/login_post/login.html中的内容

    $username = $_POST["username"];
    $password = $_POST["password"];

    //按道理来说，这里面的代码应该要查询数据库
    if ($username == "admin" && $password == "123"){
        echo "Login Success";
    }else{
        echo "LOgin Falied";
    }
    /* 查询：在网页控制台-Network-f5-点击(check.php)-载荷中查看username和password
    返回：在Response中可以看到Login Success */

?>