import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

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

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

export const User = mongoose.model('User', UserSchema)
