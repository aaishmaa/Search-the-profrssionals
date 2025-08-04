import express from 'express';
import authRoutes from './Routes/auth.route.js';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

dotenv.config();

//Help read json data
app.use(express.json());

app.use('/api/auth', authRoutes); //Prefix all routes with /api/auth


export default app;