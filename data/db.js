const mysql =  require('mysql');

const pool =  mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'sir'
});

exports.query = function(sql, arr){

	//创建一个promise
	return new Promise(( resolve, reject ) => {
		//建立链接
		pool.getConnection(function (err, connection) {

			if (err) {
				reject( error );
				return;
			}

			connection.query(sql, arr, function (error, results) {

				//释放链接 提供给别人
				connection.release();

				if (error) reject( error );
				else
				//执行回调函数，将数据返回
				resolve(results);

			});

		});
	});

};

