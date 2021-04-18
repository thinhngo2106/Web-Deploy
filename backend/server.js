import express from 'express'
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
const port = 4000
const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });


mongoose.connect('mongodb://localhost/kols', {
  useCreateIndex:true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRouter);
