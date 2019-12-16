import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import router from './routes';


// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app = express();




// Middleware
app.use(cors());
app.use(bodyParser.json());

// Router usage
app.use('/api', router);

app.use((req, res) => {
  res.status(400).send("Error 404");
});

export const api = functions.https.onRequest(app);
