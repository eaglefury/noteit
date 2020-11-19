import express from 'express';
import router from './controllers/notesController';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

mongoose
  .connect(process.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('Db connection established successfuly'))
  .catch((err) => console.log(`error : ${err.message}`));

app.listen(port, () => {
  console.log('app server started');
});
