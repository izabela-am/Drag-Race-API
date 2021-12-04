import 'reflect-metadata';

import { Server } from 'http';

import { app } from './app';

const PORT = 3333;
const server = new Server(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})