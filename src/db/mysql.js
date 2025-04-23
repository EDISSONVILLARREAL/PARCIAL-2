const mysql = require("mysql2");
const config = require("../config");

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    port: config.mysql.PORT,
    password: config.mysql.password,
    database: config.mysql.database,

}

let connection;
function conMysql() {
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if (err) {
            console.log("Error connection to mySQL" + err.stack);
            return;
        }
        console.log("Conected to MySQL as id:" + connection.threadId);
    }
    );

}

conMysql();

function query(sql, callback){
    connection.query(sql, (err, result) => {
        if(err){
            console.log("Error ejecutando el query: " + err.stack);
            return;
        }
        callback(result);
    });
}

function findAll(table){
    return new Promise((resolve, reject) => {
        query(`SELECT * FROM ${table}`, (result) => {
            resolve(result);
        });
    });
}

function findById(table, id){
    return new Promise((resolve, reject) => {
        query(`SELECT * FROM ${table} WHERE id = ${id}`, (result) => {
            resolve(result);
        });
    });
}

module.exports = {
    findAll,
    findById
}