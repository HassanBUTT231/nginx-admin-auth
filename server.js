const express = require('express');
const path = require('path');
const app = express();

app.use('/admin', express.static(path.join(__dirname, 'admin-panel')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});


app.get('/', (req, res) => {
    res.send('Home Page - Public Access');
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
