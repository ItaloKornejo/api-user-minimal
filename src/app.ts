import express from 'express';
require('dotenv').config()
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.routes';

const app = express();
app.set('port', process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan(process.env.ENVIRONMENT!));
app.use(express.json());

// routes
app.use('/api/user',userRoutes);


export default app;


