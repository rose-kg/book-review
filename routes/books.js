const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateToken = require('../middleware/auth');

router.get('/', bookController.getAllBooks);
router.get('/isbn/:isbn', bookController.getBookByISBN);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/title/:title', bookController.getBooksByTitle);
router.get('/:isbn/reviews', bookController.getBookReviews);

router.put('/:isbn/review', authenticateToken, bookController.addOrUpdateReview);
router.delete('/:isbn/review', authenticateToken, bookController.deleteReview);

module.exports = router;
