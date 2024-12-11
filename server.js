const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// Endpoint to handle form submissions
app.post("/submit", (req, res) => {
    const newResponse = req.body;

    // Read existing responses
    fs.readFile("responses.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Server Error");
        }

        const responses = data ? JSON.parse(data) : [];
        responses.push(newResponse);

        // Save updated responses
        fs.writeFile("responses.json", JSON.stringify(responses, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).send("Server Error");
            }
            res.status(200).send("Response saved successfully!");
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
