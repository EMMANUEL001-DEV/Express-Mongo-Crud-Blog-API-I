require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const itemRoutes = require('../Routes/itemRoutes');

const app = express();
app.use(express.json());

// app.use('/api')

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected')
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch((err) => console.log(err));
