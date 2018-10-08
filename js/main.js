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

function tag(name) {
  return document.createElement(name)
}

for (var index0 = 0; index0 < a.length; index0 = index0 + 1) {
  row = a[index0]
  index1 = 0 //獲得行内容
  x = tag('div') //向x中写入标签名div
  main1.appendChild(x) //向main1里插入标签x--(div)
  for (var index1 = 0; index1 < row.length; index1 = index1 + 1) {
    zz = row[index1] //取值为q w e r
    y = tag('kbd') //向y裏寫入元素(標簽)kbd
    ico = tag('img')
    buttonContainer = tag('button') //向buttonContainer写入button标签

    if (hash[row[index1]]) { //定义了对应的值
      ico.src = 'http://' + hash[row[index1]] + '/favicon.ico'
    } else { //没有就设置成默认图标。
      ico.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    ico.onerror = function (xxx) {
      //图片加载错误也显示默认图片
      xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }

    y.textContent = zz //規定(y)的内容
    buttonContainer.textContent = '编辑' //规定buttonContainer(button)的内容
    buttonContainer.id = row[index1]
    x.appendChild(y) //向x裏插入標簽y(kbd)
    y.appendChild(buttonContainer)
    y.appendChild(ico)
    buttonContainer.onclick = function (inf) { //这里的问题是获取不到对应的按键,不能用key
      bb = inf.target
      console.log(bb.nextSibling)
      img2 = bb.nextSibling
      key1 = bb.id
      webpage = prompt('请输入一个网址') //对相应键值对内容更改
      hash[key1] = webpage
      img2.src = 'http://' + webpage + '/favicon.ico'
      ico.onerror = function (xxx) {
        xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
      }
      localStorage.setItem('newhash', JSON.stringify(hash))
       //创建一个localStorage  把hash转换为字符串
    }
  }
}
var flag = false

function focusss() {
  document.onkeypress = null
}
document.onkeypress = function (inf) {
  keyvalue = inf.key
  website = hash[keyvalue]
  window.open('http://' + website)
}
function blurrr() {
  document.onkeypress = function (inf) {
    keyvalue = inf.key
    website = hash[keyvalue]
    window.open('http://' + website)
  }
}