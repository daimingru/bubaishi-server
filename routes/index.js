const router = require('koa-router')()
//api controller router
const ApiRouter = require('../Api/IndexApi')();
//view controller router
const ViewRouter = require('../Controller/IndexController')();

router.get('/', async (ctx, next) => {
	console.log('this is / path');
	/* 
		Interceptor ...
		所有API拦截器
	*/
	await next();
});

//Api
router.use('/api', ApiRouter.routes(), ApiRouter.allowedMethods());
//view
router.use('/', ViewRouter.routes(), ViewRouter.allowedMethods());

module.exports = router;
