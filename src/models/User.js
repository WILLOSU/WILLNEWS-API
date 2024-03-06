import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({ // aqui é feito a configuração do banco!!
  
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});
// criptografia do usuário feito de forma assicrona
// o pass é um has gigantesco, não é feito a descriptografia
// e sim verificamos se o has é o mesmo.

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;

// criei uma nova instancia do esquema ------------------------>  new mongoose.Schema
// depois defino o esquema ------------------------------------>  mongoose.model("User", UserSchema);
// coloco dentrou dê user para facilitar e joguei aqui dentro-->  export default User;
// 