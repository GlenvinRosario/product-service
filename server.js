const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const productRoute = require('./routes/productRoute.js')
app.use(cors());
app.use(express.json());


app.use('/api', productRoute)
const PORT = process.env.PORT
app.listen(PORT || 8081 , ()=> {
    console.log("Server Running on the PORT ", PORT);
} )