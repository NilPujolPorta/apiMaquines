const { v4: uuid } = require("uuid");
const Estoc = require("../database/Estocs");

const getAllEstocs = () => {
    const allEstocs = Estoc.getAllEstocs();
    return allEstocs;
};

const getOneEstoc = (estocId) => {
    const estoc = Estoc.getOneEstoc(estocId);
    return estoc;
};

const createNewEstoc = (newEstoc) => {
    const estocToInsert = {
        ...newEstoc,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdEstoc = Estoc.createNewEstoc(estocToInsert);
        return createdEstoc;
    } catch (error) {
        throw error;
    }
};

const updateOneEstoc = (estocId, changes) => {
    const updatedEstoc = Estoc.updateOneEstoc(estocId, changes);
    return updatedEstoc;
};

const deleteOneEstoc = (estocId) => {
    Estoc.deleteOneEstoc(estocId);
};

module.exports = {
    getAllEstocs,
    getOneEstoc,
    createNewEstoc,
    updateOneEstoc,
    deleteOneEstoc,
};