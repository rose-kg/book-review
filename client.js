const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Task 10: Async/Callback
function getAllBooks(callback) {
  axios.get(`${BASE_URL}/books`)
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
}

// Task 11: Promise
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/books/isbn/${isbn}`);
}

// Task 12: Async/Await
async function getBooksByAuthor(author) {
  const res = await axios.get(`${BASE_URL}/books/author/${author}`);
  return res.data;
}

// Task 13: Async/Await
async function getBooksByTitle(title) {
  const res = await axios.get(`${BASE_URL}/books/title/${title}`);
  return res.data;
}

// EXAMPLES
getAllBooks((err, books) => {
  if (err) console.error('Error:', err);
  else console.log('All books:', books);
});

getBookByISBN('1234567890')
  .then(res => console.log('Book by ISBN:', res.data))
  .catch(err => console.error(err));

getBooksByAuthor('Robert C. Martin').then(console.log);
getBooksByTitle('Clean Code').then(console.log);
