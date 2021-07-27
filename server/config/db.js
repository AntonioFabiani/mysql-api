const mysql = require('mysql')

const db = mysql.createConnection({
host: "192.168.64.2",
user: "user",
password: "27CJOkYCP2zgRkVA",
database:"blog_posts" 
})

module.exports = db;