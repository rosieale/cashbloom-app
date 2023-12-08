const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;


// Routes
const userRoutes = require('./routes/users');
const incomeRoutes = require('./routes/incomes');
const expensesRoutes = require('./routes/expenses');
const tipsRoutes = require('./routes/tips');



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/tips', tipsRoutes);





mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error('MongoDB connection error:', error));


app.get('/', (req, res) => {
    res.send("Hello World!")
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});