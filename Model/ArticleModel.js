// const mysql   = require('../data/db');
// const Redis   = require('../data/Redis');
const BaseModel = require('./BaseModel');


/**
 *    Shorthand for: ArticleModel
 *    @type Module analysis
 *    @author dmr
 *    @function ArticleModel
 *
 */

class ArticleModel extends BaseModel{

	/**
	 *    Shorthand for: ArticleModel
	 *    @type Module
	 *    @author dmr
	 *    @function 获取文章详情
	 *    @param :{
	 *    	id : article id
	 *    }
	 *
	 */

	GetArticleDetail(id){

		let sql = "SELECT * FROM article where id =" + id;
		return mysql.query(sql);

	}

	/**
	 *    Shorthand for: souceApi
	 *    @type Module
	 *    @author dmr
	 *    @function 获取推荐文章
	 *    @param :{
	 *    	page : int （每页10条）
	 *    }
	 *
	 */

	async getRecommend(page){

		let sql = "SELECT title, id FROM article ORDER BY createDate,id DESC LIMIT 0,20;";


		let content = await Redis.get('recommend').then(function (result) {
			return JSON.parse(result);
		});

		if( !content ){

			content = await mysql.query(sql);
			Redis.set('recommend', JSON.stringify(content));

		}

		return content;


	}


}

module.exports = new ArticleModel;
