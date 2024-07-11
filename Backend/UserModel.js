import mongoose from "mongoose";
// Define the Users schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Create the Users model
const Users = mongoose.model("Users", userSchema);

export default Users;