import 'module-alias/register';
import 'dotenv/config';
import express, { Express } from 'express';
import apiRoute from '@routes/api/index'

const PORT = process.env.PORT;
const app: Express = express();

app.use(express.json())
app.use('/api', apiRoute)

app.listen(PORT, (): void => {
  console.log(`Started on http://localhost:${PORT}`);
})