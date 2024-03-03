import mongoose from "mongoose";

function connectDatabase() {// sincrono
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Connected!")) // assicrono, esperando conectar
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
}

export default connectDatabase;


// O  mongose está para o mongo assim como criar uma api do zero com node está para express.
