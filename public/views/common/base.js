// !function (window) {
//
//
// 	window.$ = function(el){
// 		return new Base(el,this);
// 	}
//
// 	function Base(el,context) {
//
// 		this.elem = [];
// 		this._$ = {};
// 		switch (typeof el){
// 			case 'string':
// 				context = (context == window ? document : this);
// 				this.elem = context.querySelectorAll(el);
// 				for(var i = 0; i < this.elem.length; i++){
// 					this._$[i] = this.elem[i];
// 				}
// 				this._$.context = context;
// 				return this._$;
// 				break;
// 		}
//
// 	}
//
// 	Base.prototype.on = function(type, fn){
//
// 		if( this.length > 1 ){
// 			for ( var i = 0; i < this.length; i++ ){
// 				this[i].addEventListener(type[i],fn);
// 			}
// 		}else{
// 			this.addEventListener(type[i],fn);
// 		}
//
//
// 	}
//
// }(window);

(function(){

	var Base = window.$ = function(selector){
		return new Base.fn.init(selector);
	}

	//添加原型事件
	Base.fn = Base.prototype = {

		init:function(selector){

			switch (typeof selector) {
				case 'string':
					var element = document.querySelectorAll(selector);
					Array.prototype.push.apply(this,element);
					return this;
					break;
				case 'object':
					this[0] = selector;
					return this;
					break;
			}

		},

		on:function (type, fn) {

			if( this.length > 1 ){

				for ( var i = 0; i < this.length; i++ ){
					this[i].addEventListener(type[i],fn);
				}

			}else{
				this[0].addEventListener(type,fn);
			}
		}
	}

	//将init的原型引用成Base的原型
	Base.fn.init.prototype = Base.fn;

})();


