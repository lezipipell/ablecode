const fs = require('fs');
const booksData = fs.readFileSync('data/books.json', 'utf-8');

function getBooks() {
    return JSON.parse(booksData);
}

function storeBook(req) {
    const data = JSON.parse(booksData);
    return data.push(req);
}
module.exports = { getBooks, storeBook };
