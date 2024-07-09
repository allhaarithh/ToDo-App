import express from "express";
const app = express();
const port = 5000;
import path from "path";

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
