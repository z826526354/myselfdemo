<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$getName = $_POST['getName'];
$phoneNum = $_POST['phoneNum'];
$address = $_POST['address'];
$wechat = $_POST['wechat'];
$timee = $_POST['timee'];
$clas = $_POST['clas'];
$concret = $_POST['concret'];

echo "收货姓名: {$getName}, 收货电话号码: {$phoneNum}, 本人收货地址: {$address}, 微信号: {$wechat}, 收货时间: {$timee}, 快递类别: {$clas},  具体物品: {$concret}";