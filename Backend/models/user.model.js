import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const user = model('User', userSchema);
export default user;