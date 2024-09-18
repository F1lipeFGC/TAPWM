var http = require ('http');
var server = http.createServer(function(req,res){
    var opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><body>Site da Fatec Sorocaba</body></html>");
    }

    else if (opcao=='/curso'){
        res.end(""<html><body>Professores</body></html>"")
    }

    else

    res.end("<html><body>Site da Fatec Sorocaba</body></html>");

});

server.listen(3000);