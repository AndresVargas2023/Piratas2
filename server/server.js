require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const cors = require("cors");

const connectToDatabase = require('./config/mongoose.config');

connectToDatabase(); // Llamando a la función para conectar a la base de datos

app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: [`http://localhost:3000`,]
    })
)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);
const pirateRoutes = require("./routes/pirate.routes");
app.use("/api/pirate", pirateRoutes);



app.listen(port, () => console.log(`Listening on port: ${port}`));