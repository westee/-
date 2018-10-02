
	var a = {
		'0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		'1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		'2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
		'length': 3
	}
	var hash = {
		q: 'qq.com',
		w: 'weibo.com',
		e: 'ele.me',
		r: 'renren.com',
		t: 'taobao.com',
		y: 'yy.com'
	}
	var hashInLocalStorage = JSON.parse(localStorage.getItem('newhash') || 'null') //whatisthis('newhash')
	if (hashInLocalStorage) { //如果hashInlocalStorage不为空
		hash = hashInLocalStorage //覆盖掉hash里的内容
	}
	// function whatisthis(a){
	// 	JSON.parse(localStorage.getItem(name)||'null')
	// }

	function tag(name) {
		return document.createElement(name)
	}

	for (var index0 = 0; index0 < a.length; index0 = index0 + 1) {
		row = a[index0]
		index1 = 0 //獲得行内容
		x = tag('div') //向x裏寫入元素(標簽)div
		main1.appendChild(x) //向main1裏插入(追加)標簽x(div)
		for (var index1 = 0; index1 < row.length; index1 = index1 + 1) {
			zz = row[index1] //取值为q w e r
			//web = hash[zz]	
			y = tag('kbd') //向y裏寫入元素(標簽)kbd
			ico = tag('img')
			button1 = tag('button') //向button1写入button标签

			if (hash[row[index1]]) {
				ico.src = 'http://' + hash[row[index1]] + '/favicon.ico'
			} else {
				ico.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
			}
			ico.onerror = function (xxx) {
				//console.log(xxx)
				xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
			}

			y.textContent = zz //規定(y)的内容
			button1.textContent = '编辑' //规定button1(button)的内容
			button1.background = 'red'
			button1.id = row[index1]
			x.appendChild(y) //向x裏插入標簽y(kbd)
			y.appendChild(button1)
			y.appendChild(ico)
			button1.onclick = function (inf) { //这里的问题是获取不到对应的按键,不能用key
				//console.log(button1)                   //每次都是m键,这个问题以后会讲
				bb = inf.target
				console.log(bb.nextSibling)
				img2 = bb.nextSibling
				//bb = inf.target.id                //获取到hash里网址对应的按键字母
				key1 = bb.id
				webpage = prompt('请输入一个网址') //对相应键值对内容更改
				hash[key1] = webpage
				img2.src = 'http://' + webpage + '/favicon.ico'
				ico.onerror = function (xxx) {
					xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
				}
				localStorage.setItem('newhash', JSON.stringify(hash)) //创建一个localStorage  把hash转换为字符串
			}
		}
	}
	document.onkeypress = function (inf) {
		keyvalue = inf.key
		website = hash[keyvalue]
		window.open('http://' + website)

	}
