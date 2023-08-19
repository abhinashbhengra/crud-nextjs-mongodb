import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    return;
  }

  try {
    const dbUri = process.env.MONGODB_URI; // Replace with your MongoDB URI
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(dbUri, options);
    connection.isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDb;
