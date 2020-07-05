import { RequestHandler } from 'express';
import Book from '../models/books';

const add: RequestHandler = async (req, res) => {
  const { name, author } = req.body;

  if (!name || !author) {
    return res.status(400).json({ message: 'author and book name are required' });
  }

  const book = new Book({ name, author });
  await book.save();

  return res.status(201).send({
    message: 'Saved',
    book: book.toJSON()
  });
};

export default add;
