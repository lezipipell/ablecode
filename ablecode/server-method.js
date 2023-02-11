var http = require('http');
var data = [];
var qs = require('querystring');

var server = http.createServer(function (req, res) {
    if ('/' == req.url) {
        switch (req.method) {
            case 'GET':
                getRequest(res);
                break;
            case 'POST':
                postRequest(req, res);
                break;

            default:
                badrequest(res);
        }
    } else {
        notFound(res);
    }
});

function getRequest(res) {
    var html = `<!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>GET Request</title>
        </head>
        <body>
            <label for='nama'>Nama</label>
            <input type='text' id='nama' name='nama' />
        </body>
    </html>`;

    res.write(html);
    res.end;
}

function postRequest(req, res) {
    data = req;
    var html = `<!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>GET Request</title>
        </head>
        <body>
            <p>Selamat datang</p>
        </body>
    </html>`;

    res.write(html);
    res.end;
}
