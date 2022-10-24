module.exports = function () {

	Object.assign(global,{

		/**
		 *    Shorthand for: BaseController
		 *    @type M
		 *    @author dmr
		 *    @function require Module 模块文件路径于Model下
		 *    @param : ModuleName
		 *
		 */

		M(path){

			return require('../Model/' + path + 'Model');

		},

		/**
		 *    Shorthand for: BaseController
		 *    @type M
		 *    @author dmr
		 *    @function console.log
		 *    @param : data
		 *
		 */

		P(data){
			console.log('------------------------------------------------------');
			console.log(data);
			console.log('------------------------------------------------------');
		},

		/**
		 *    Shorthand for: BaseController
		 *    @type AjaxReturn
		 *    @author dmr
		 *    @function Ajax
		 *    @param : data
		 *
		 */

		AjaxReturn(code,data,msg){
			return JSON.stringify({
				meta: {
					code: code,
					msg : msg
				},
				data: data
			});
		}
	})

}();
