import 'reflect-metadata';

import ora from 'ora';
import { Server } from 'http';

import { app } from './app';

const PORT = 3333;
const server = new Server(app);

server.listen(PORT, () => {
  ora().succeed(`Server running on port ${PORT}`);
})