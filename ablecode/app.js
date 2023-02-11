var fs = require('fs');

fs.readFile('./data.json', 'utf-8', function (err, data) {
    if (err) throw err;

    console.log(JSON.parse(data));
});

console.log('selanjutnya...');

// tes
