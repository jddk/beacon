let express = require('express');
let router = express.Router();
let MYSQL = require('../db');

router.get('/', function (req, res, next) {
	 const sql = `DELETE FROM 九段刀客 WHERE id IN (${req.query.id})`
	    MYSQL.query(sql, (err, result) => {
	        if (err) {
	            res.send({
	                code: 0,
	                msg: '删除失败',
	                data: err
	            })
	        } else {
	            res.send({
	                code: 1,
	                msg: '删除成功'
	            })
	        }
	    })

});
module.exports = router
