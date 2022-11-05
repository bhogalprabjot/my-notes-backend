import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRouter  from './routes/notes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));

app.use(cors());

// routes
app.get('/', (req, res)=>{ res.send("Hello world!")});

app.use('/notes', notesRouter);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://prabjot:test%401234@cluster0.xjnoyrq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err));




 