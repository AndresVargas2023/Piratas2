const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [2, "Player name must be at least 2 characters long"]
    },
    imageUrl: {
        type: String,
        required: [true, "Image URL is required"],
    },
    position: {
        type: String,
        default: 'true', // Valor predeterminado true (como cadena)
        required: [true, "Position is required"],
    },
    treasureChests: {
        type: Number,
        required: [true, "Number of treasure chests is required"],
        default: 0,
    },
    pirateCatch: {
        type: String,
        required: [true, "Pirate catch is required"],
    },
    pegLog: {
        type: Boolean,
        default: true,
    },
    eyePatch: {
        type: Boolean,
        default: true,
    },
    hookHand: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true, versionKey: false });

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;
