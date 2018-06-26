
/**
 * 2018/06/26
 * maskletter
 */

Array.fn = Array.prototype;

function toString(data){
  return typeof(data) == 'object' ? JSON.stringify(data) : data
}

Array.note = Array.fn.note = 'Array.js for Maskletter~!!'

/**
 * 数组forEach方法
 */
Array.fn.forEach = function(start, end, callback){
  callback = callback || end || start;
  start = typeof(start) == 'function' ? 0 : start;
  end = typeof(end) == 'function' ? this.length : end || this.length;
	for(var i = start; i < end; i++){
    if(this[i]) {
      var result = callback && callback(this[i], i, this);
      if(result == true) continue;
      else if(result == false) break;
    }
	}
}
Array.fn.each = Array.fn.forEach

/**
 * 数组替换功能
 */
Array.fn.replace = function(index, data, isArray){
  if(isArray){
    this.remove(index);  
    this.insert(index, data, isArray)
  }else this.splice(index, 1, data);
  
	return this;
}

/**
 * 数组添加到尾部功能
 */
Array.fn.push = function(data, isArray){
  if(this.insert) this.insert(this.length, data, isArray)
  else this[this.length] = data;
  return this;
}

/**
 * 数组添加到头部功能
 */
Array.fn.unshift = function(data, isArray){
  if(this.insert) this.insert(0, data, isArray);
  else this.splice(0, 0, data)
  return this;
}

/**
 * 数组插入功能
 */
Array.fn.insert = function(index, data, isArray){
	if(isArray){
		var $this = this;
		data.forEach( function(_data, _index) {
			$this.insert(index+_index, _data)
		});
	}else this.splice(index, 0, data)
	return this;
}
/**
 * 数组删除功能
 */
Array.fn.remove = function(start, end){
	return this.splice(start, end || 1);;
}

/**
 * 数组map方法
 */

Array.fn.map = function(fn, $that){
	var arr = [];
  if (typeof fn === "function") {
    	this.forEach(function(data, index){
    		arr.push(fn.call($that, data, index));
    	})
    }
  return arr;
}


/**
 * 数组filter方法
 */
Array.fn.filter || function(){
	Array.fn.filter = function(fn){
	    var r = [], $this = this;
	    this.forEach( function(data, index) {
	    	if (fn(data,index)) {
	            r.push(data);
	        }
	    });
	    return r;
	}
}()

/**
 * 数组indexOf方法
 */
Array.fn.indexOf = function(value){
  var index = -1;
  value = toString(value)
  this.forEach( function(data, i) {
      data = toString(data);
      if(data == value) {
        index = i;
        return false;
      }
  });
  return index;
}

/**
 * 数组lastIndexOf方法
 */

Array.fn.lastIndexOf = function(value){
  value = toString(value)
  var arr = [];
  this.forEach(function(data, index){
    data = toString(data);
    if(data == value) arr.push(index)
  })
  return arr.length == 0 ? -1 : arr.pop();
}

/**
 * 数组find方法
 */
Array.fn.find = function(callback, thisValue){
  var array = [];
  this.forEach(function(data, index, arr){
      if(callback(data, index, arr)){
        array[0] = data;
        return false;
      }
  });
  return array
}


/**
 * 数组fill方法
 */
Array.fn.fill = function(data, start, end){
  start = start || 0;
  end = end || this.length;
  var $this = this;
  this.forEach(start, end, function(_data, index){
    $this[index] = data
  })
  return this;
}

/**
 * 数组复制
 */
Array.fn.clone = Array.fn.slice;

/**
 * 数组去重
 */
Array.fn.clearRepeat = function(){
	var newArray = this.clone();
  this.splice(0, this.length);
	for(var i=0, length = newArray.length; i< length; i++){
	  if(this.indexOf(newArray[i]) == -1){
	     this.push(newArray[i]);
	  }
	}
	return this;
}
/**
 * 数组冒泡排序
 */
Array.fn.__sort = Array.fn.sort;
Array.fn.sort = function(name, callback){
	var key = typeof(name) == 'string' ?  name : undefined;
	callback = callback || function(a,b){ 
    a = a[key] || a;
    b = b[key] || b;
    if(typeof(a) == 'number') return a - b;
		else return a.localeCompare(b);
	};
	this.__sort(callback)
	return this;
}

/*-----------------------------------------------------------------------------*/

/**
 * 添加Array.of
 */
Array.of || function(){

  Array.of = function(){
    var array = [];
    array.push(Array.from(arguments), true)
    return array
  }

}()

/**
 * 添加Array.form
 */
Array.from || function(){
  Array.from = function(data){
    if(typeof(data) == 'string'){
      return data.split('')
    }else if(data.length || data.size){
      var array = [];
      for(var i in data){
        array.push(data[i])
      }
      return array;
    }
  }
}()
  

