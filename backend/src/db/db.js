const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://kashish:kashish@imagegallery.gpnrfyi.mongodb.net/imageproject';

async function connectDB() {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
}

module.exports = connectDB;