import mongoose from "mongoose";

const connectTodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CON);
    console.log("connected to db");
  } catch (error) {
    console.log("something went wrong", error.message);
  }
};

export default connectTodb;
