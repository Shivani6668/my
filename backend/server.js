const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Path to your frontend build directory
const distPath = path.join(__dirname, '../dist');

// Serve the dist folder as static files
app.use(express.static(distPath));

// Catch-all route to serve index.html for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
