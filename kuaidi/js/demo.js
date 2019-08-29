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
var str = '',
strcopy = '',
arr,
newArr;
var locked = 1;
wrapUl.style.opacity = 0;

function ajaxFun(method, url, data, callback, flag) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject('Microsoft.XMLHttp')
                // 兼容IE
    }
    
    method = method.toUpperCase();
    // 兼容get/post大小写
    if (method == 'GET') {
        xhr.open('GET', url + '?' + data, flag);
        xhr.send();
    }else if (method == 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(data);
        // 兼容 GET 和 POST 请求
    }
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
    }
}
        
        
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
    var data = 'getName=' + getName.value + '&phoneNum=' + phoneNum.value + '&address=' + address.value + '&wechat=' + wechat.value + '&timee=' + timee.value + '&clas=' + clas.value + '&concret=' + concret.value ;

    ajaxFun('GET','./data/post.php', '', showPerson, true);

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
        if (locked % 2 != 1) {
        console.log(newArr);
        copylike.select();
        document.execCommand("Copy");
        alert('复制成功, 赶快联系管理员估价吧')
    }
    locked++;

}