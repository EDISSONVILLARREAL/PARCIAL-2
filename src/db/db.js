const {Sequelize} = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: "mysql",
    port: config.mysql.PORT
});

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log("all good");
    } catch (error) {
        console.log("all bad");
    }
}

testConnection();

module.exports = sequelize; 