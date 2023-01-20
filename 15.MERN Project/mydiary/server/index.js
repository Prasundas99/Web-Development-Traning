import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";

//db connection import
import mongooseConnection from "./config/db.js";

//Router import
import HomeRouter from './routes/homeRoute.js';
import NotesRouter from './routes/notesRoute.js';
import UserRouter from './routes/authRouter.js';
import ResetRouter from './routes/forgetPassRouter.js'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Mongodb connection
mongooseConnection();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(morgan("dev"));
app.use(cors());

//Setting up Rate Limiter (100 request per 1 minute)
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false,
})
app.use(limiter)



//Routes
app.use('/', HomeRouter);
app.use('/users/notes', NotesRouter);
app.use('/users', UserRouter)
app.use('/reset', ResetRouter)




//Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});