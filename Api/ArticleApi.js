/**
 * Shorthand for:
 *    @title  ArticleApi
 *    @date   2019-10-29
 *    @author Curt
 *    @desc   子路由配置
 *    @Param  ArticleController
 */

const Query = require('querystring');
const Router = require('koa-router')();

//const Redis = require('../data/Redis');

Router.get('/', async (ctx, next) => {
    console.log('this is /article');
    // ctx.body = AjaxReturn(8200,list,'获取成功');
    await next();
});

Router.get('/test', async (ctx, next) => {

    // let page = Query.parse(ctx.req._parsedUrl.query).page;

    // let list = await M('Article').getRecommend(page);

    ctx.body = AjaxReturn(8200,'this is /article/test','success');

});

module.exports = {
    path: '/article',
    Router : Router
};

