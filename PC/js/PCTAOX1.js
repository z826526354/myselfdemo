$('#location').areaList({
	items: [{
		name: '北京',
		href: '#',
	},{
		name: '上海',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '北京',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',
	},{
		name: '北京',
		href: '#',
	},{
		name: '上海',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '中山',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '中山',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',	
	},{
		name: '广州',
		href: '#',				
	}],
	rowNum: 5,							// 每行显示数量
	nowItem: '北京',						// 默认地址
	color: '#999', 						// 默认颜色
	nowItemImg: './img/location.png'	//默认图片
});
$('#swiper').sliderImg({
	image:['./img/big.png','./img/big.png','./img/big.png', './img/big.png'],
	interVal:2000
});

var timer = setInterval(function(){
	run();
}, 6000);
function run(){
	$('.dS1').animate({top: - 80},1500,'swing',function (){
		$('.dS2').animate({top: - 90},1500,'swing');
		$('.dS1').css({top: '200px'});
	});
	setTimeout(function(){
		$('.dS1').animate({top: 120},1500,'swing',function () {
			$('.dS2').animate({top: - 190},1500,'swing')
		}).animate({top: 10}, 1500,'swing', function(){
			$('.dS2').css({top: '90px'}).animate({top: 10},1500,'swing')
		});
	}, 2000);
}

$('.hov').hover(function () {
	$('.hover').css({display: 'inline-block'})
}, function () {
	$('.hover').css({display: 'none'})
})