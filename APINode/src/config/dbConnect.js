import mongoose, {mongo} from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONECTON_STRING);
    
  return mongoose.connection;
}

export default conectaNaDatabase;
