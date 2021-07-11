require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes =require('./routes/userRoutes')

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products',productRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {res.send('welcome to e_store')});

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));