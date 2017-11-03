'use strict';
class MyjQuery{
	constructor( selector ){
		let objs = document.querySelectorAll(selector);
		//获取DOM对象
		for( let i = 0; i < objs.length; i++){
			this[i] = objs[i];
		}
		this.length = objs.length;
		//在构造方法中绑定this，避免单独使用时找不到对象
	}
	// 一、匹配每个获取的元素
	each(callback){
		for( let i = 0; i < this.length; i++){
			callback.call(this[i],i,this[i]);
		}
		//通过for循环，遍历得到每个DOM元素，通过call()将this指针指向实例化的对象，并且传递两个参数值，i代表的索引值，this[i]代表DOM元素
		return this;
	}
	
	//二、获取/修改HTML内容
	html(content){
		if(content){
			this.each( function(index,val) {
				this.innerHTML = content;
			})
		}else{
			return this[0].innerHTML;
		}
		return this;
	}

	//三、text  设置/修改元素的纯文本内容
	text(val){
		if(val){
			this.each(function(){
				this.innerText = val;
			});
		}else{
			return this[0].innerText;
		}
		return this;
	}

	//四、设置css属性
	css(obj){
		//接收一个对象
		this.each(function (index,val){
			for(let i of Object.entries(obj)){
				//将接收到的对象通过entries方法转换成数组并进行循环遍历
				val.style[i[0]] = i[1];
				//i[0]代表的属性名，i[1]代表的属性值
			}
		});
		return this;
	}

	//五、hasClass
	hasClass(cls){
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		this.each(function (index,val){
			if (this.className.match(reg)){
	        	return true;
	        }else{
	        	return false;
	        }
		})
    	return this;
	}

	//六、addClass  
	addClass(cls){
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		this.each(function (index,val){
			if (!this.className.match(reg)){
	        	this.className += ' ' + cls;
	        }
		})
    	return this;
	}

	//七、removeClass
	removeClass(cls){
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		this.each(function (index,val){
			if (this.className.match(reg)){
	        	this.className = this.className.replace(cls,'');
	        }
		})
    	return this;
	}

	//八、find  first  last
	find(){
		if(!this){
			return;
		}else{
			return this;
		}
	}

	first(){
		return this[0];
	}

	last(){
		var index = this.length-1;
		return this[index];
	}

	//九、index 返回这个元素在同辈元素中的位置
	index(){
		var elems = this[0].parentNode.children;
		 for(var i = 0; i < elems.length; i++){//从0计数
			  if( elems[i] == this[0] ){
			  	return i;
			  }
		 }
	}

	//十、eq 获取指定索引的元素
	eq(index){
		var index = index < 0 ? (this.length-1) : index;
		return this[index];
	}

	//十一、size 对象中元素个数
	size(){
		return this.length;
	}
	
	//十二、显示和隐藏
	//hide
	hide(){
		this.each(function(index,val){
			this.style.display = 'none';
		})
		return this;
	} 

	//show
	show(){
		this.each(function(index,val){
			this.style.display = 'block';
		})
		return this;
	}

	//十三、toArray方法
	toArray(){
		var arr = [];
		this.each(function(index,val){
			arr.push(this);
		})
		return arr;
	}
	
	
}