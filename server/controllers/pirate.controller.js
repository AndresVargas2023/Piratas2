const Pirate = require("../models/pirate.model");

exports.createPirate = async (req, res) => {
    try {
        const { name, imageUrl, position, treasureChests, pirateCatch, pegLog, eyePatch, hookHand } = req.body;

        // Verificar si ya existe un capitán
        if (position === 'Captain') {
            const captainExists = await Pirate.exists({ position: 'Captain' });
            if (captainExists) {
                return res.status(400).json({ error: 'Ya hay un capitán registrado' });
            }
        }

        const newPirate = new Pirate({
            name,
            imageUrl,
            position,
            treasureChests,
            pirateCatch,
            pegLog,
            eyePatch,
            hookHand,
        });

        const savedPirate = await newPirate.save();
        res.status(201).json(savedPirate);
    } catch (error) {
        console.error("Error creating pirate:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Resto del código permanece sin cambios

exports.getPirates = async (req, res) => {
    try {
        const pirates = await Pirate.find().sort({ name: 1 });
        res.status(200).json(pirates);
    } catch (error) {
        console.error("Error getting Pirates:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.getPirateById = async (req, res) => {
    try {
        const pirate = await Pirate.findById(req.params.id);
        res.status(200).json(pirate);
    } catch (error) {
        console.error("Error getting pirate by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updatePirate = async (req, res) => {
    try {
        const updatedPirate = await Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPirate);
    } catch (error) {
        console.error("Error updating pirate:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deletePirate = async (req, res) => {
    try {
        const deleted = await Pirate.deleteOne({ _id: req.params.id });
        res.status(200).json(deleted);
    } catch (error) {
        console.error("Error deleting pirate:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
