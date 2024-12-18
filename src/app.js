const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get("/",(req,res)=>{
  res.send("Welcome To Nimra Asif  - Fyp Backend Server ")
})
// Handle unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});
// Global error handler
app.use(errorHandler);

module.exports = app;
