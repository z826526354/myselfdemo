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
$('.page').createPage({
	pageCount:13,
	current:3,
	backFn:function(p){
		console.log(p)
	}
})


$('.hov').hover(function () {
	$('.hover').css({display: 'inline-block'})
}, function () {
	$('.hover').css({display: 'none'})
})
$('.navMid').find('ul').on('click', 'li', function () {
	$('.NMplaying').removeClass('NMplaying');
	$(this).addClass('NMplaying');
});