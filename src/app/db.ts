import { connect } from 'mongoose';
import winston from 'winston';

const getDBConnection = (): string => {
  const mongoUrl = process.env.app_mongodbUrl;

  if (mongoUrl === '') {
    throw new Error('mongo url not specified');
  }

  return mongoUrl;
};

export const connectDB = () => {
  const db: string = getDBConnection();

  connect(db, { useNewUrlParser: true })
    .then(() => {
      winston.info('Connected to database...');
    })
    .catch(error => {
      winston.error('failed to connect', error);
    });
};
