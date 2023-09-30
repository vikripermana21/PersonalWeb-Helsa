import express from "express";
import cors from "cors";
import routes from './routes/routes.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.listen(5000, ()=>{
    console.log("server up and running");
})