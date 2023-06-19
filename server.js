const express = require('express');
const app = express();

// Get the port from the command line arguments or use a default value
const port = process.argv[2] || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
