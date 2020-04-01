let express = require('express');
let router = express.Router();
let MYSQL = require('../db');
let arrayToTree = require('../utils/arrayToTree');

router.get('/', function (req, res, next) {
	//查询数据
    MYSQL.query('SELECT * from 九段刀客', function (err, data, fields) {
        if (err) {
            console.log(err);
        }else{
            res.send({
           		code: 1,
            	msg: '获取列表成功',
            	data: arrayToTree(data)
        	});
        }
    });

});
module.exports = router
