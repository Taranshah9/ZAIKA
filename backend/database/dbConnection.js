import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://taranshah9:Riddhima26@cluster0.ttapv4w.mongodb.net/?retryWrites=true', {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
