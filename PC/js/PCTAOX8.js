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



$('.hov').hover(function () {
	$('.hover').css({display: 'inline-block'})
}, function () {
	$('.hover').css({display: 'none'})
})
