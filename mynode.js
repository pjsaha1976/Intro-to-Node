var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000; //8080

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var fileName = '.' + q.pathname;
    if (fileName == './') fileName = './index.html';
    fs.readFile(fileName,function(err,data){
        if (err)
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log('incoming request:' + req.url);
        res.end();
    })
}).listen(PORT);
console.log('server listening on port ' +  PORT + ' ...');