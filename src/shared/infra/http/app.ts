import 'express-async-errors';
import 'reflect-metadata';

import express from "express";
import helmet from 'helmet';
import cors from 'cors';

import { errors } from './middlewares/errors';
import { routes } from './routes/index.routes';

export const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(helmet());

app.use(routes);
app.use(errors);
