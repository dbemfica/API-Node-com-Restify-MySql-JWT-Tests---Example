const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

const errorHandler = (error, mensagem, rejectFunction) => {
    console.error(error);
    rejectFunction({ error: mensagem });
}

const categoriaModule = require("./categoriaModule")({connection, errorHandler});
const usuarioModule = require("./usuarioModule")({connection, errorHandler});
const authModule = require("./authModule")({connection, errorHandler});


module.exports = {
    categoriaModule: () => categoriaModule,
    usuarioModule: () => usuarioModule,
    authModule: () => authModule
};