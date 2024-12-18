import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';
import mammoth from 'mammoth';
import express from 'express';


dotenv.config();

const app=express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the CV site!');
});
app.post('/projects', (req, res) => {   
    res.send('Projects');
});


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .then(()=>app.listen(3000, () => console.log('Server running on port 3000')))
    .catch(err => console.log(err));

