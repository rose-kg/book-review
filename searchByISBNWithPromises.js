const axios = require('axios');

function getBookByISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/books/isbn/${isbn}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

// Usage:
getBookByISBN('1234567890')
  .then(book => {
    console.log('Book found:', book);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
