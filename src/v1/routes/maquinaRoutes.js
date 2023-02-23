const express = require("express");
const maquinaController = require("../../controllers/maquinaController");

const router = express.Router();

router.get("/", maquinaController.getAllMaquines);

router.get("/:maquinaId", maquinaController.getOneMaquina);

// router.post("/", maquinaController.createNewMaquina);

// router.patch("/:maquinaId", maquinaController.updateOneMaquina);

// router.delete("/:maquinaId", maquinaController.deleteOneMaquina);

module.exports = router;