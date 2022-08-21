<!-- /* 根据学生发考号查询数据库，得到数据之后进行返回 */ -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    ul{
        list-style: none;
    }
    .title{
        font-size: large;
        color: red;
    }
</style>
<body>
<?php
    // 后端工程师工作
    //准备模拟数据
    $data = array();
    $data["123"] = array("name"=>"张三","chinese"=>"103","math"=>"89","english"=>"133");
    $data["234"] = array("name"=>"李四","chinese"=>"111","math"=>"95","english"=>"87");
    $data["345"] = array("name"=>"王五","chinese"=>"120","math"=>"135","english"=>"79");

    $code = $_GET["code"];
    //查询数据库
    // $result = $data[$code];

?>

<?php if(array_key_exists($code,$data)){
    $result = $data[$code];
?>

<!-- 有学生考号 -->
<div>
    <div class="title"><?php echo $result["name"] ?>成绩如下</div>
    <ul>
        <li>语文：<?php echo $result["chinese"] ?> 分</li>
        <li>数学：<?php echo $result["math"] ?> 分</li>
        <li>英语：<?php echo $result["english"] ?> 分</li>
    </ul>
</div>

<?php
}else{
?>

<!-- 无学生考号 -->
<div>该学生考号不存在</div>

<?php } ?>

</body>
</html>