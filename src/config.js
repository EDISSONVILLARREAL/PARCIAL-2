module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    PORT: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "parcial_2",
},

};