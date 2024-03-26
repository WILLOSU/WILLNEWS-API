import mongoose from "mongoose";

function connectDatabase() {// sincrono
  //console.log("Wait connecting to the database ")
  mongoose
    .connect(process.env.baseURL, { // varíavel global
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    })
    .then(() => console.log("MongoDB Atlas Connected!")) // assicrono, esperando conectar
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
}

export default connectDatabase;


// O  mongose está para o mongo assim como criar uma api do zero com node está para express.
// para fazer o acesso na variável global (dados sensíveis) precisamos instalar a biblioteca
// dotenv para acessar os dados usando o comando npm i dotenv

