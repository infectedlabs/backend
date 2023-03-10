const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Define a route for getting data from the API at https://api.howrare.is/v0.1/collections
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

// Define a route for getting data from the API at https://api.howrare.is/v0.1/collections/${id}
app.get('/api/collections/:id', (req, res) => {
  const id = req.params.id;
  const apiUrl = `https://api.howrare.is/v0.1/collections/${id}`;
  console.log('API URL:', apiUrl);
  axios
    .get(apiUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error fetching data from API' });
    });
});

// Define a route for getting data from the API at https://api-mainnet.magiceden.dev/v2/collections/${id}/activities?offset=0&limit=100
app.get('/api/magiceden/collections/:id/activities', (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://api-mainnet.magiceden.dev/v2/collections/${id}/activities?offset=0&limit=100`)
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
