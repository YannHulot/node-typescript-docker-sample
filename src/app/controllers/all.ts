import { RequestHandler } from 'express';
import Book from '../models/books';

const all: RequestHandler = async (_req, res) => {
  const books = await Book.find();
  res.send({ books });
};

export default all;
