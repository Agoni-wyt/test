<?php
/* check.php是用来做用户名和密码的校验。 
check.php 要做的事情是获取到用户所输入的用户名和密码进行校验的工作*/
echo "sheckUsername";
$username = $_GET["username"];//对应login.html中的内容
$password = $_GET["password"];
//按道理来说，这里面的代码应该要查询数据库
if ($username == "admin" && $password == "123"){
    echo "Login Success";
}else{
    echo "LOgin Falied";
}

?>