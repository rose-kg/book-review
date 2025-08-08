const axios = require('axios');

function getAllBooks(callback) {
  axios.get('http://localhost:3000/books')
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
}

// Usage:
getAllBooks((err, books) => {
  if (err) {
    console.error('Error fetching books:', err.message);
  } else {
    console.log('Books:', books);
  }
});
