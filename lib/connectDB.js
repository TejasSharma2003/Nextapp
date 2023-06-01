import mongoose from "mongoose";

let mongoUrl = process.env.NEXT_PUBLIC_DB_URL;
mongoUrl = mongoUrl.replace("<password>", process.env.NEXT_PUBLIC_DB_PASSWORD);

const connectDb = async () => {
  try {
    const client = await mongoose.connect(mongoUrl);
    return client;
  } catch (err) {
    throw err;
  }
};
export default connectDb;
