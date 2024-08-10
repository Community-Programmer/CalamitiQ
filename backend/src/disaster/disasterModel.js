import mongoose from "mongoose";


const disasterSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: ['earthquake', 'hurricane', 'tornado', 'flood', 'wildfire', 'volcanic eruption'],
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coordinates: {
    lat:{
        type: String,
        required: true
    },
    lon:{
        type: String,
        required: true
    }
  }
});

export default mongoose.model("Disaster", disasterSchema);