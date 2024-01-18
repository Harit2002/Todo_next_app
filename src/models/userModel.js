import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a user name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  about: String,
  profileUrl: String,
}, {versionKey:false});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
