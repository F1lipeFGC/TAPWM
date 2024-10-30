var sql = require ('mssql');
 
var connSqlServer = function(){
   const sqlConfig = {
       user: 'BD2412009',
       password: 'Abc158gf',
       database:'BD',
       server: 'apolo',
       options:{
           encrypt: false,
           trustServerCertificate: true
       }
   }       
   return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão');
    return connSqlServer;
}