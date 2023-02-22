const estocService = require("../services/estocService");

const getAllEstocs = (req, res) => {
    const allEstocs = estocService.getAllEstocs();
    res.send({ status: "OK", data: allEstocs });
};

const getOneEstoc = (req, res) => {
    const {
        params: { estocId },
    } = req;
    if (!estocId) {
        return;
    }
    const estoc = estocService.getOneEstoc(estocId);
    res.send({ status: "OK", data: estoc });
};

const createNewEstoc = (req, res) => {
    const { body } = req;
    if (
        !body.producte ||
        !body.caducitat ||
        !body.dataVenda ||
        !body.ubicacio
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "One of the following keys is missing or is empty in request body: 'nom', 'tipus', 'preu', 'categoria'",
                },
            });
        return;
    }
    const newEstoc = {
        producte: body.producte,
        caducitat: body.caducitat,
        dataVenda: body.dataVenda,
        categoria: body.ubicacio
    };
    try {
        const createdEstoc = estocService.createNewEstoc(newEstoc);
        res.status(201).send({ status: "OK", data: createdEstoc });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOneEstoc = (req, res) => {
    const {
        body,
        params: { estocId },
    } = req;
    if (!estocId) {
        return;
    }
    const updatedEstoc = estocService.updateOneEstoc(estocId, body);
    res.send({ status: "OK", data: updatedEstoc });
};

const deleteOneEstoc = (req, res) => {
    const {
        params: { estocId },
    } = req;
    if (!estocId) {
        return;
    }
    estocService.deleteOneEstoc(estocId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllEstocs,
    getOneEstoc,
    createNewEstoc,
    updateOneEstoc,
    deleteOneEstoc,
};