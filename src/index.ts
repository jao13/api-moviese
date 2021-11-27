import 'reflect-metadata';
import dotenv from 'dotenv-safe';
import express from 'express';

import './database/connect';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
