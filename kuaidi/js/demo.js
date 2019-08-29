var getName = document.getElementsByClassName('getName')[0];
var phoneNum = document.getElementsByClassName('phoneNum')[0];
var address = document.getElementsByClassName('address')[0];
var wechat = document.getElementsByClassName('wechat')[0];
var timee = document.getElementsByClassName('timee')[0];
var clas = document.getElementById('clas');
var concret = document.getElementsByClassName('concret')[0];
var btn = document.getElementsByClassName('btn')[0];
var body = document.getElementsByTagName('body')[0];
var money = document.getElementsByClassName('money')[0];
var wrapUl = document.getElementsByClassName('wrapUl')[0];
var change = document.getElementsByClassName('change')[0];
var result = document.getElementsByClassName('result')[0];
var copylike = document.getElementsByClassName('copylike')[0];
var tip = document.getElementsByClassName('tip')[0];
var Oi = document.getElementsByClassName('tipi')[0];
var spanBtn = document.getElementsByClassName('spanBtn')[0];
var str = '',
strcopy = '',
arr,
newArr;
var locked = 1;
var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
wrapUl.style.opacity = 0;




getName.onchange = function () {
	if (locked % 2 != 1) {
		str = '';
    locked ++;
  }
}
phoneNum.onchange = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}
address.onchange = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}
wechat.onchange = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}
timee.onchange = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}
clas.onselect = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}
concret.onchange = function () {
  if (locked % 2 != 1) {
    str = '';
    locked ++;
  }
}



money.onclick = function (e) {
  e.preventDefault();
  console.log(111)
  var data = '收货姓名：' + getName.value + ', 收货电话号码：' + phoneNum.value + ', 本人收货地址：' + address.value +', 微信号：' + wechat.value + ' , 能收货的时间：' + timee.value + ', **快递类别：' + clas.value + ', **具体物品：' + concret.value;
  if (getName.value == '' || phoneNum.value == '' || address.value == '' || wechat.value == '' || timee.value == '' || concret.value == '') {
    wrapUl.style.opacity = 0;
    wrapUl.innerHTML = null;
    Oi.innerText = "信息加载失败，请填写完整！！";
    tip.style.top = '30px';
    spanBtn.onclick = function () {
      tip.style.top = '-240px';
    }
  }else{
    if (reg.test(phoneNum.value)) {
      showPerson(data);
    }else {
      Oi.innerText = "信息加载失败，请正确填写号码！！";
      tip.style.top = '30px';
      wrapUl.style.opacity = 0;
      wrapUl.innerHTML = null;
      spanBtn.onclick = function () {
        tip.style.top = '-240px';
      }
    }
    
  }
  
}


function showPerson(data) {
  arr = new Set(data.split(','))
  newArr = [...arr];
  if (locked % 2 == 1) {
    newArr.forEach(function(ele){
      str += '<li class="list">' + ele + '</li>';
      strcopy += ' ' + ele + ';'
    })
    locked++;
  }
  wrapUl.style.opacity = 1;
  wrapUl.innerHTML = str;
  copylike.innerHTML = strcopy;
}
btn.onclick = function () {
  if (getName.value == '' || phoneNum.value == '' || address.value == '' || wechat.value == '' || timee.value == '' || concret.value == '') {
    Oi.innerText = "copy失败，请填写完整！！"
    tip.style.top = '15px';
    spanBtn.onclick = function () {
      tip.style.top = '-240px';
    }
  } else {
    if (reg.test(phoneNum.value)) {
      console.log(newArr);
      copylike.select();
      document.execCommand("Copy");
      Oi.innerText = "copy成功!！！";
      tip.style.top = '15px';
      setTimeout(() => {
        tip.style.top = '-240px';
        tip.style.opacity = 0;
      }, 3000)
      spanBtn.onclick = function () {
        tip.style.top = '-240px';
      }
    }else {
      alert("copy失败，请正确填写号码！！")
    }
  }
}