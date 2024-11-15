import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerConfig from './../swaggerConfig.js';

import authorRoutes from './routes/authorRoute.js';
import userRoutes from './routes/userRoute.js';
import songRoutes from './routes/songRoute.js';
import playlistRoutes from './routes/playlistRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(authorRoutes)
app.use(userRoutes)
app.use(songRoutes)
app.use(playlistRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig.default));

mongoose.connect(process.env.MONGODB_URI)
    .then(
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        }))
    .catch((error) => console.log('failed to connect to MongoDB', error))

