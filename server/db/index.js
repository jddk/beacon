const mysql = require("mysql");
let MYSQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: '灯塔'
});
// 连接数据库
MYSQL.connect();
module.exports = MYSQL;