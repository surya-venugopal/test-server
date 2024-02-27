const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(req.query);
});

app.get('/get_data', (req, res) => {
    res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});