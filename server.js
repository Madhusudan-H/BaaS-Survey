const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS middleware
const corsOptions = {
    origin: 'https://baa-s-survey.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials if needed
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Preflight requests

// Middleware for parsing JSON
app.use(bodyParser.json());

// File path for storing responses
const responsesFile = path.join(__dirname, 'responses.json');

// Endpoint to handle survey submission
app.post('/submit-survey', (req, res) => {
    const responseData = req.body;

    // Validate request body
    if (!responseData || typeof responseData !== 'object') {
        res.status(400).send('Invalid data format');
        return;
    }

    // Append the response to responses.json
    fs.appendFile(responsesFile, JSON.stringify(responseData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send({ message: 'Survey received successfully!' });
        }
    });
});

// Endpoint to fetch all responses
app.get('/responses', (req, res) => {
    fs.readFile(responsesFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading responses:', err);
            res.status(500).send('Error reading responses');
        } else {
            const responses = data.split('\n').filter(line => line).map(JSON.parse);
            res.status(200).json(responses); // Serve JSON responses as an array
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
