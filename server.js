const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Configure CORS to allow requests from specific origins
const corsOptions = {
    origin: 'https://baa-s-survey.vercel.app', // Allow your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials if necessary
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// File path for responses.json
const responsesFile = path.join(__dirname, 'responses.json');

// Initialize ID counter
let currentId = 1;

if (fs.existsSync(responsesFile)) {
    const data = fs.readFileSync(responsesFile, 'utf8');
    const responses = data.split('\n').filter(line => line).map(JSON.parse);
    if (responses.length > 0) {
        currentId = responses[responses.length - 1].id + 1; // Set ID to the last ID + 1
    }
}

// Endpoint to handle survey submission
app.post('/submit-survey', (req, res) => {
    const responseData = req.body;

    // Validate request body
    if (!responseData || typeof responseData !== 'object') {
        res.status(400).send('Invalid data format');
        return;
    }

    // Add serial ID to the response
    responseData.id = currentId++;

    // Append the response to responses.json
    fs.appendFile(responsesFile, JSON.stringify(responseData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send({ message: 'Success', id: responseData.id });
        }
    });
});

// Endpoint to fetch all responses
app.get('/responses', (req, res) => {
    fs.readFile(responsesFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading responses.json:', err);
            res.status(500).send('Error reading responses');
        } else {
            const responses = data.split('\n').filter(line => line).map(JSON.parse);
            res.status(200).json(responses); // Serve the JSON data as an array
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
