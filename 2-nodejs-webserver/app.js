const fs = require('fs'); //file system
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url; //get url

    res.writeHead(200, {
        'Content-Type': 'text-html',
    }); //give 200 ok status to page

    function renderHTML(path, res) {
        fs.readFile(path, (err, data) => {
            err ? res.writeHead(404).write('error: file not found') : res.write(data);
            res.end();
        });
    } // rendering html that client request

    switch (url) {
        case '/about':
            renderHTML('./pages/about.html', res);
            break; // return file 'pages/about.html, if doesnt exit will rerutn 404 status and not found message
        case '/contact':
            renderHTML('./pages/contact.html', res);
            break; // return file 'pages/contact.html, if doesnt exit will rerutn 404 status and not found message

        default:
            renderHTML('./pages/index.html', res);
            break; // return file 'pages/index.html, if doesnt exit will rerutn 404 status and not found message
    } //simple get request routing
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}...`); //message in console while server is running
});
