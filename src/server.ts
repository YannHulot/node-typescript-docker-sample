/* eslint-disable no-console */
import app from './application';
import { connectDB } from './app/db';

// connect to the db
connectDB();

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
