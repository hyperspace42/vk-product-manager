import 'module-alias/register';
import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors'
import apiRoute from '@routes/api/index';
import errorMiddleware from '@middlewares/errorMiddleware';

const PORT = process.env.PORT;
const app: Express = express();

app.use(express.json());
app.use(cors())
app.use('/api', apiRoute);
app.use(errorMiddleware);

app.listen(PORT, (): void => {
  console.log(`Started on http://localhost:${PORT}`);
});
