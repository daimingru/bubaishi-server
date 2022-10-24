const request = require('superagent');
const Query = require('querystring');


module.exports = function (router) {

	router.get('/', async (ctx, next) => {

		await ctx.render('index/index', {
			title: '欢迎来到koa2',
			h2:    '欢迎来到koa2'
		})
	})

	/**
	 * Shorthand for:
	 *
	 *    文章详情页
	 *    @Get
	 *    @Param {
	 *    	id : 文章ID
	 *    }
	 *
	 */

	router.get('/article', async (ctx, next) => {

		let id = Query.parse(ctx.req._parsedUrl.query).id;
		let content = await M('Article').GetArticleDetail(id);
		content[0].createDate = M('Article').GmtToString(content[0].createDate);

		await ctx.render('article/index', {
			data: content[0]
		})
	})


};
