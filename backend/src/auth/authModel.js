import mongoose, { Schema } from "mongoose";


const userDetailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default:'user'
  },
  profileUrl: {
    type: String,
  },
  dob: {
    type: Date,
  },
});

const authSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userDetails: {
      type: userDetailSchema,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", authSchema);