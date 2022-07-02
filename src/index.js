import express from 'express';
import router from './routes/router.js';
import cors from 'cors';


const server = express();
server.use(cors())
server.use(express.json());
server.use(router);


console.log("teste")

server.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});