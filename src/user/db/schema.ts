import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  age: Number,
  password: String,
  active: {
    type: Boolean,
    default: true
  }
}, {timestamps: true});

export const User = mongoose.model('User', UserSchema)
 