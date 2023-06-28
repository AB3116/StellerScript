import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    throw new Error("Couldn't connect to Mongo: " + err.message);
  }
}

export default connect;
