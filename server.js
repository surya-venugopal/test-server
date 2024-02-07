const express = require('express');
const app = express();
const PORT = 3000;

// API 1: Example GET API
app.get('/api/data1', (req, res) => {
    // Process your data and send response
    res.json({ message: 'API 1 response' });
});

// API 2: Example POST API
app.post('/api/data2', (req, res) => {
    // Process incoming data (if any) and send response
    res.json({ message: 'API 2 response' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});