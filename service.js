
var http = require('http');


http.createServer(function(req, res) {
    // res.writeHead(200, {});
    // res.end('OIIII');
    // console.log(req.url);
    if (req.url === "/teste") {
        res.end('<h1>hyasrkfhsdkfvh</h1>');
    } else if (req.url === "/") {
        res.end('<h1>Home</h1>');
    }

}).listen(8081);
console.log('O Servidor Funcionou!!');