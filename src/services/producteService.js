const { v4: uuid } = require("uuid");
const Producte = require("../database/Producte");

const getAllProductes = () => {
    const allProductes = Producte.getAllProductes();
    return allProductes;
};

const getOneProducte = (producteId) => {
    const producte = Producte.getOneProducte(producteId);
    return producte;
};

const createNewProducte = (newProducte) => {
    const producteToInsert = {
        ...newProducte,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdProducte = Producte.createNewProducte(producteToInsert);
        return createdProducte;
    } catch (error) {
        throw error;
    }
};

const updateOneProducte = (producteId, changes) => {
    const updatedProducte = Producte.updateOneProducte(producteId, changes);
    return updatedProducte;
};

const deleteOneProducte = (producteId) => {
    Producte.deleteOneProducte(producteId);
};

module.exports = {
    getAllProductes,
    getOneProducte,
    createNewProducte,
    updateOneProducte,
    deleteOneProducte,
};