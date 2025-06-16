const express = require('express');
const path = require('path');
const app = express();

app.use('/admin', express.static(path.join(__dirname, 'admin-panel')));

app.get('/', (req, res) => {
    res.send('Home Page - Public Access');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
