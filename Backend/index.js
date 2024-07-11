import express from "express";
const app = express();
const port = 5000;
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import Users from "./UserModel.js"; // Adjust the path based on your file structure



// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt
    const newUser = new Users({ email, password: hashedPassword }); // Store the hashed password
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await Users.findOne({ email: email });
    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful' });
      } 
      else {
        // Password does not match
        res.status(401).json({ message: 'Invalid email or password' });
      }
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'An error occurred while trying to log in' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
