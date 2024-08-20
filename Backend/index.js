import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConnect.js';
import userRouter from './Routers/user.router.js';
import urlRouter from './Routers/url.router.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const allowedOrigin = ['https://prismatic-cassata-773ca5.netlify.app','http://localhost:5173']

const app = express();
app.use(cors({ credentials: true, origin: allowedOrigin }));
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use('/api', userRouter);
app.use('/apiUrl', urlRouter);

app.get('/',(req,res) => {
    res.status(200).send('<h4>API Calls</h4>');
})

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("App running in port -", port);
})
