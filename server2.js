const http = require ('http');


const server = http.createServer( function (req, res){

    res.writeHead(200, {'content-Type' : 'text/html'})
    res.end('<h1>Hi</h1>, selamat <i>anda<i> berhasil membuat server dengan <b>NodeJS</b>');
    res.end()
})

server.listen(8000); 

console.log('server running at port 8000');