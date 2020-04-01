
var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/public"));

// 获取列表
let getList = require('./server/api/getList');
app.use('/api/getList',getList);

// 删除
let del = require('./server/api/del');
app.use('/api/del',del);

// 新增
let add = require('./server/api/add');
app.use('/api/add',add);

// 编辑
let edit = require('./server/api/edit');
app.use('/api/edit',edit);

app.listen(3060);