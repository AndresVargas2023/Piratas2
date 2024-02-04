const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


module.exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201);
        res.json(newUser);
 } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200);
        res.json(users);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

module.exports.login = async (req, res) => {
    try {
        /* Buscar el usuario */
        const foundUser = await User.findOne({ username: req.body.username });
        if (foundUser === null) {
            res.status(404);
            res.json({ msg: "User not found" });
            return
        }
        /* Verificar contraseña */
        const verified = await bcrypt.compare(req.body.password, foundUser.password);
        if (!verified) {
            res.status(400);
            res.json({ msg: "Wrong Password" })
            return
        }
        /* Creacion de la firma jwt */
        const newJWT = jwt.sign({ _id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2 minutes" })
        res.cookie("usertoken", newJWT);
        res.status(200)
        res.json({ msg: "logged in" });

    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}
module.exports.logout = async (req, res) => {
    try {
        res.clearCookie("usertoken");
        res.status(200);
        res.json({ msg: "logged out" })
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}