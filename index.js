const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

const app = express();
dotenv.config(); 

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', productRoutes);

app.listen(PORT,async ()=>{
    console.log(`server started at ${PORT}`);
});


