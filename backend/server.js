const express = require('express');
const path = require('path');
const csv = require('csv-parser');  // To parse the CSV file
const fs = require('fs');
const cors = require('cors');  // To allow cross-origin requests from your frontend

const app = express();
const port = 3001;

app.use(cors());  // Enable CORS to allow frontend to make requests

// API endpoint to serve mission data
app.get('/api/missions', (req, res) => {
  const missions = [];

  // Parse the CSV file and push the data into the 'missions' array
  fs.createReadStream(path.join(__dirname, 'Space_Corrected.csv'))
    .pipe(csv())
    .on('data', (row) => {
      missions.push(row);
    })
    .on('end', () => {
      res.json(missions);  // Send the parsed CSV data as JSON
    })
    .on('error', (error) => {
      console.error('Error reading CSV:', error);
      res.status(500).send('Error reading CSV');
    });
});

// Serve the frontend (if you're building a full-stack app, this could be different)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
