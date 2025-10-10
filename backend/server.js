const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const phasesRoute = require('./routes/phases.route'); // Make sure this is present

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Make sure this line is present and not commented out
app.use('/api/phases', phasesRoute); 

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the BrightPath backend server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});