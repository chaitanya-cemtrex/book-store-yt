import mongoose from "mongoose";

export const connectToDatabase = async () => {
  if (mongoose.connection[0]) {
    return;
  }
  await mongoose
    .connect(
      "mongodb+srv://admin:Pass1234@cluster0.xqtp6x4.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
