/**
 * Shorthand for:
 *    @title  IndexApi
 *    @date   2019-10-29
 *    @author Curt
 *    @desc   所有API接口路由在此汇总
 *    @Param  ApiController
 */

const fs = require('fs');
const Router = require('koa-router')()
const qs = require('querystring');
const request = require('koa2-request');


let bindChildRouter= () => {

    let files = fs.readdirSync(__dirname);

    files.forEach(function (item, index) {

        if(item === 'IndexApi.js') return false;

        let router_child = require(`./${item}`);
        // 在根路由中注册子路由
        Router.use(router_child.path, router_child.Router.routes(), router_child.Router.allowedMethods())
    
    })

}

module.exports = () => {

    bindChildRouter();

    Router.get('/', async (ctx, next) => {
        console.log('this is /api Index');
        await next();
    });
    
    Router.get('/test', async (ctx, next) => {
        ctx.body = AjaxReturn(200,{
            data: 'this is /api/test'
        },'success');
    });

    Router.get('/get_open_id', async (ctx, next) => {

        const query = qs.parse(ctx.req._parsedUrl.query);

        // const _params = {
        //     appid: 'wx8170c7fbb5c8b62e',
        //     appSecret: '56808a44130f9d74e65867fdaa69096d',
        //     js_code: query.code,
        // }       
        
        // const _params = {
        //     appid: 'wxaa1d3a8fdc329a4c',
        //     appSecret: '64cce8ebf77ec1daa24fdfd980df32e4',
        //     js_code: query.code,
        // }       

        const result = await request({
            url: `https://api.weixin.qq.com/sns/jscode2session?${ctx.req._parsedUrl.query}&appid=wx8170c7fbb5c8b62e&secret=56808a44130f9d74e65867fdaa69096d`
        });

        let _body = {};
        try {
            _body = JSON.parse( result.body );
        } catch (error) {
            _body = {};
        }

        if( _body.openid ){
            ctx.body = AjaxReturn(200, _body ,'success');
        }else{
            ctx.body = AjaxReturn(403, {} ,'error');
        }
        // let page = Query.parse(ctx.req._parsedUrl.query).page;
    
        // let list = await M('Article').getRecommend(page);

        
    
    });

    return Router;

};