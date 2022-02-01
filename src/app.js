import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import grupoRoutes from './routes/grupo.routes'

const app = express();
const corsOptions = {
    origin: "http://localhost:3000"
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))




//Routes
app.use('/api/grupo', grupoRoutes);


export default app;