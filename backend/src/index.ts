import express from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import router from './routes';
import * as events from './utils';
/**
 * Initiate configuration
 */
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
const devEnv = process.env.NODE_ENV === 'dev';
const uiPath = path.resolve(__dirname, '../../application/');

/** 
* Middlewares
*/
if (devEnv) {
    // app.use();
} else {
    app.use(express.static(uiPath));
}
/** 
* Express router
*/
app.use('/api', router);
// @ts-ignore
app.get('/events', events.subscribe);

app.listen(PORT, () => {
    console.log(`Server is running in '${process.env.NODE_ENV}' mode at http://localhost:${PORT}`);
});
