import mongoose from 'mongoose';

// Define the book schema with proper data validation
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  }
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

export default Book;
