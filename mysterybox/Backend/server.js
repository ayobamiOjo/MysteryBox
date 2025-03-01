const express = require('express');
const app = express();
const port =  8082;

// Use middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the server root!');
  });
  
// GET /search endpoint: logs the search term and returns dummy data
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  console.log("Search term received:", searchTerm);
  
  // Generate some dummy data based on the search term
  const dummyData = [
    { id: 1, title: `Dummy post related to ${searchTerm}` },
    { id: 2, title: `Another dummy post about ${searchTerm}` }
  ];
  
  res.json(dummyData);
});

// Example POST endpoint (for login, sign-up, etc.)
app.post('/login', (req, res) => {
  console.log("Login data:", req.body);
  // Dummy response
  res.json({ success: true, user: { id: 1, username: req.body.email } });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
