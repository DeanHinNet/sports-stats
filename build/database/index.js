const mysql = require('mysql');
const credentials = require('./../../config.js')
var fs = require('fs');

// module.exports = connection = mysql.createConnection({
//     host: credentials.host,
//     user: credentials.user,
//     password: credentials.password,
//     database: credentials.database
// })

module.exports = connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database,
    multipleStatements: true,
    ssl: {
        ca: fs.readFileSync(__dirname + '/rds-combined-ca-bundle.pem')
    }
})