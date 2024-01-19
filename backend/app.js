const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const userRoutes = require('./routes/userroute');
const adminRoutes = require('./routes/adminroutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


// Middleware
app.use(bodyParser.json());
app.use(cors()); // Add this line

// Routes
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
