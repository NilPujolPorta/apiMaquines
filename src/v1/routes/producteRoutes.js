const express = require("express");
const producteController = require("../../controllers/producteController");

const router = express.Router();

router.get("/", producteController.getAllProductes);

router.get("/:producteId", producteController.getOneProducte);

router.post("/", producteController.createNewProducte);

router.patch("/:producteId", producteController.updateOneProducte);

router.delete("/:producteId", producteController.deleteOneProducte);

module.exports = router;