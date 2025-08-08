const books = require('../models/books');

// Task 1: Get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};


// Task 2: Get book by ISBN
exports.getBookByISBN = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
};

// Task 3: Get books by author
exports.getBooksByAuthor = (req, res) => {
  const author = req.params.author.toLowerCase();
  const result = books.filter(b => b.author.toLowerCase().includes(author));
  res.json(result);
};

// Task 4: Get books by title
exports.getBooksByTitle = (req, res) => {
  const title = req.params.title.toLowerCase();
  const result = books.filter(b => b.title.toLowerCase().includes(title));
  res.json(result);
};

// Task 5: Get book reviews
exports.getBookReviews = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  book ? res.json(book.reviews) : res.status(404).json({ message: 'Book not found' });
};

// Task 8: Add/Update review
exports.addOrUpdateReview = (req, res) => {
  const { isbn } = req.params;
  const { comment } = req.body;
  const username = req.user.username;

  const book = books.find(b => b.isbn === isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const existing = book.reviews.find(r => r.user === username);
  if (existing) {
    existing.comment = comment;
  } else {
    book.reviews.push({ user: username, comment });
  }

  res.json({ message: 'Review saved', reviews: book.reviews });
};

// Task 9: Delete review
exports.deleteReview = (req, res) => {
  const { isbn } = req.params;
  const username = req.user.username;

  const book = books.find(b => b.isbn === isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const index = book.reviews.findIndex(r => r.user === username);
  if (index === -1) return res.status(403).json({ message: 'Review not found' });

  book.reviews.splice(index, 1);
  res.json({ message: 'Review deleted', reviews: book.reviews });
};
