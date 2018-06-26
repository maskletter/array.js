<!DOCTYPE html>
<html lang="ch">
<head>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="array.js"></script>
	<style type="text/css">
		.show-code{ display: inline-block;margin: 0 20px 20px;border: 1px solid #ccc;vertical-align: top;padding: 10px; }
	</style>
</head>
<body>

<script type="text/javascript">
	
window.people = ['张三','李四','王五','赵六','沈七','小红','小明','李四','小王']
window.people1 = [65,54,69,88,21]
window.people2 = [
	{ id: 65, zm: 'adfwe', name: '张三', price: '16.2' },
	{ id: 21, zm: 'zsi', name: '赵六', price: '12.67' },
	{ id: 54, zm: 'okf', name: '李四', price: '659.00' },
	{ id: 88, zm: 'mnjk', name: '王五', price: '6.29' },
	{ id: 54, zm: 'okf', name: '李四', price: '659.00' }
]

addHtml('初始化数组', people2)

addHtml('使用map方法获取id', people2.map(function(data){ return data.id }))

addHtml('使用sort方法根据id排序', people2.sort('id'))
addHtml('使用sort方法根据zm排序', people2.sort('zm'))

addHtml('使用indexOf方法寻找{ id: 21, zm: \'zsi\', name: \'赵六\', price: \'12.67\' }下标', 
		people2.indexOf({ id: 21, zm: 'zsi', name: '赵六', price: '12.67' }))


addHtml('使用find方法寻找id等于65的', 
		people2.find(function(data){ return data.id == 65 }))


addHtml('使用fill方法填充数据', people2.fill('填充的数据',0,1))

addHtml('使用push方法添加到数据尾部', people2.push('push填充的数据'))
addHtml('使用push方法添加到数据尾部', people2.push(['push填充数组1','push填充数组2'], true))

addHtml('使用unshift方法添加到数据尾部', people2.unshift('unshift填充的数据'))
addHtml('使用unshift方法添加到数据尾部', people2.unshift(['unshift填充数组1','unshift填充数组2'], true))


addHtml('使用replace方法添替换数据', people2.replace(2, 'replace替换的数据'))

addHtml('使用insert方法插入数据', people2.insert(2, 'insert插入的数据'))

people2.remove(1)
addHtml('使用remove方法删除数据', people2)

addHtml('使用clearRepeat方法数组去重', people2.clearRepeat())

addHtml('使用filter方法筛选数组zm字段带有字母k的元素', 
		people2.filter(function(data){ return data.zm && data.zm.indexOf('k') != -1 }))


	
	function addHtml(title, content){
		var div = '<div class="show-code">'
			div += '<h1>'+title+'</h1>';
			div += '<pre>'+JSON.stringify(content, null, 4)+'</pre>'
			div += '</div>'
		document.body.innerHTML += div
	}

</script>
</body>
</html>
