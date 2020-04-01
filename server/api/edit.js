let express = require('express');
let router = express.Router();
let MYSQL = require('../db');

router.get('/', function (req, res, next) {
	 const sql = `UPDATE 九段刀客 SET ? WHERE id = ?`;

	    MYSQL.query(sql,[req.query,req.query.id], (err, result) => {
	        if (err) {
	            res.send({
	                code: 0,
	                msg: '编辑失败',
	                data: err
	            })
	        } else {
	            res.send({
	                code: 1,
	                msg: '编辑成功'
	            })
	        }
	    })

});
module.exports = router
