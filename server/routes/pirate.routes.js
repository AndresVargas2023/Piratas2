const express = require('express');
const router = express.Router();

const pirateController = require('../controllers/pirate.controller')

//Create
router.post("", pirateController.createPirate);
//Find all
router.get("", pirateController.getPirates);
//Find One
router.get("/:id", pirateController.getPirateById);
//Update one
router.put("/:id", pirateController.updatePirate);
//Delete one
router.delete("/:id", pirateController.deletePirate);

module.exports = router;