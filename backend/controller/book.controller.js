import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).json({ error: 'An error occurred while fetching books' });
  }
};
