/**
 * Shorthand for:
 *    @title  IndexController
 *    @date   2019-10-29
 *    @author Curt
 *    @desc   所有API接口路由在此汇总
 *    @Param  ApiController
 */

//请求
const request = require('superagent');
const Query = require('querystring');
const Router = require('koa-router')()


module.exports = () => {

    Router.get('/', async (ctx, next) => {
		await ctx.render('index/index', {
			title: '欢迎来到Aparesse',
			h2:    '欢迎来到Aparesse'
		})
	})

    return Router;

};

