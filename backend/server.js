import express from 'express';
import mongoose from 'mongoose';
// import data from './data.js';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amaazon', {
mongoose.connect(process.env.MONGODB_URL || 'mongodb://...', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


mongoose.connection.on('connected',()=>{
    console.log("connected")
})
mongoose.connection.on('error',()=>{
    console.log("error",err)
})

const port = process.env.PORT || 5000;



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('api/config/paypal', (req, res) =>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});

app.get("/",(req, res) => {
    res.send("server is ready");
    
});


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    
});

app.listen (port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
