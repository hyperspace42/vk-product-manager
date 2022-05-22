import 'dotenv/config';
import express, { Express } from 'express';
import startBot from './bot';

const PORT = process.env.PORT;
const app: Express = express();

startBot();

app.listen(PORT, (): void => {
  console.log(`[~] Bot server started on http://localhost:${PORT}`);
});
