var http = require('http');
var PORT = 3400;

var server = http.createServer(function (req, res) {
    var body = '<p>Hmm tes satu dua empat..</p>';

    res.writeHead(200, {
        'Content-length': body.length,
        'Content-type': 'text/html',
        'Pesan-head': 'Hallo Koding',
    });

    res.write(body);
    res.end();
});

server.listen(PORT);
console.log(`Port ${PORT} : Node.js Server...`);
