const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Define a route for getting data from the API
app.get('/api/data', (req, res) => {
  axios
    .get('https://api.howrare.is/v0.1/collections')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error fetching data from API' });
    });
});

// Start the server and listen on port 3001
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
