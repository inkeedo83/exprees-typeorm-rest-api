import './config/env';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './common/routes';
import createConnection from './config/create-connection';
import errorsHandler from './common/error-handler';

const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorsHandler);

export default app;
