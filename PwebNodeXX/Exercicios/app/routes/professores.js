module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
        const sql = require ('mssql');
  
        const sqlConfig = {
            user: 'BD2412009',
            password: 'Abc158gf',
            database: 'BD', //Na FATEC, utilizar o database BD ou LP8
            server: 'apolo',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
            options:{
                encrypt: false,
                trustServerCertificades: true
            }
        
        
        }

        // return sql.connect(sqlConfig);
   
       async function getProfessores() {
           try {
               const pool = await sql.connect(sqlConfig);
           
                const results = await pool.request().query('SELECT * from PROFESSORES')
           
                res.render('informacao/professores', {profs: results.recordset});
     
            } catch (err) {
                console.log(err)
           }
            //res.render('informacao/professores');
        }
       getProfessores();
    });
 }