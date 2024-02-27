import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  password: String,
  active: Boolean
}, {timestamps: true});

export const User = mongoose.model('User', UserSchema)
 