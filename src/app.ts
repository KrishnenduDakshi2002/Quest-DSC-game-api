import config from 'config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import helmet from 'helmet';
import connect from './db/connect';
import router from './routes/route';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(router);
app.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);

  connect(); // making database connection
});
