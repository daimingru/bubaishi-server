/**
 *    Shorthand for: BaseModel
 *    @type Module analysis
 *    @author dmr
 *    @function util
 *
 */
class BaseModel {

	/**
	 *    Shorthand for: BaseModel
	 *    @type Module base
	 *    @author dmr
	 *    @function 转换GMT格式时间
	 *    @param :{
	 *    	data : GMT
	 *    }
	 *
	 */

	GmtToString(GMT){

		let date = new Date(GMT)

		let Str=date.getFullYear() + '-' +
			(date.getMonth() + 1) + '-' +
			date.getDate();
			// date.getHours() + ':' +
			// date.getMinutes() + ':' +
			// date.getSeconds()
		return Str;

	}

}

module.exports = BaseModel;