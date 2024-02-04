require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const MONGODB_URI = "mongodb+srv://Andres_Vargas:JdUgplF7yO4gdJfu@cluster0.z8gvpjd.mongodb.net/Prueba";

console.log('MONGODB_URI:', MONGODB_URI);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

module.exports = connectToDatabase;
