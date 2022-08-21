<?php
header("Content-Type:text/xml;");

$arr = array();
$arr[0] = array("name"=>"三国演义","author"=>"罗贯中","desc"=>"一个杀伐纷争的年代");
$arr[1] = array("name"=>"水浒传","author"=>"施耐庵","desc"=>"108条好汉");
$arr[2] = array("name"=>"西游记","author"=>"施耐庵","desc"=>"四个和尚上西天");
$arr[3] = array("name"=>"红楼梦","author"=>"曹雪芹","desc"=>"封建王朝的缩影");
?>



<booklist>
    <?php
    foreach ($arr as $key => $value){
    ?>
    <book>
        <name><?php echo $value['name'] ?></name>
        <author><?php echo $value['author'] ?></author>
        <desc><?php echo $value['desc'] ?></desc>
    </book>
    <?php
        }
    ?>
</booklist>

<!-- 

<booklist>
    <book>
        <name>三国演义</name>
        <author>罗贯中</author>
        <desc>一个杀伐纷争的年代</desc>
    </book>
    <book>
        <name>水浒传</name>
        <author>施耐庵</author>
        <desc>108条好汉</desc>
    </book>
    <book>
        <name>西游记</name>
        <author>施耐庵</author>
        <desc>四个和尚上西天</desc>
    </book>  
    <book>
        <name>红楼梦</name>
        <author>曹雪芹</author>
        <desc>封建王朝的缩影</desc>
    </book>  
</booklist>


 -->

