let express = require('express');
let router = express.Router();
let MYSQL = require('../db');

router.get('/', function (req, res, next) {
	 const sql = `INSERT INTO 九段刀客 SET ?`;
		// 新增
	    MYSQL.query(sql,req.query, (err, result) => {
	        if (err) {
	            res.send({
	                code: 0,
	                msg: '新增失败',
	                data: err
	            })
	        } else {
			 // 新增成功后查出id
				MYSQL.query("SELECT LAST_INSERT_ID()",(err,data)=>{
					res.send({
					    code: 1,
					    msg: '新增成功',
						data:{id:data[0]['LAST_INSERT_ID()']}
					})
				})
	        }
	    })

});
module.exports = router
