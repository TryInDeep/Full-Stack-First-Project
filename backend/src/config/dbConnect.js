import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(
      `DataBase Connected : ${connect.connection.host} , ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect; 