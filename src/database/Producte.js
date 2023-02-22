const { getOneCategoria } = require("./Categoria");
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllProductes = () => {
    return DB.productes;
};

const getOneProducte = (producteId) => {
    const producte = DB.productes.find((producte) => producte.nom === producteId);
    if (!producte) {
        return;
    }
    return producte;
};

const createNewProducte = (newProducte) => {
    const isAlreadyAdded =
        DB.productes.findIndex((producte) => producte.nom === newProducte.nom) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Producte with the name '${newProducte.nom}' already exists`,
        };
    }
    if (getOneCategoria(newProducte.categoria) === false) {
        throw {
            status: 400,
            message: `Categoria with the name '${newProducte.categoria}' does not exist`,
        };
    }
    try {
        DB.productes.push(newProducte);
        console.log(DB);
        saveToDatabase(DB);
        return newProducte;
    } catch (error) {
        throw {
            status: 500,
            message: `Error while creating new producte: ${error}`,
        };
    }
};

const updateOneProducte = (producteId, changes) => {
    const indexForUpdate = DB.productes.findIndex(
        (producte) => producte.nom === producteId
    );
    if (getOneCategoria(newProducte.categoria) === false) {
        throw {
            status: 400,
            message: `Categoria with the name '${newProducte.categoria}' does not exist`,
        };
    }
    if (indexForUpdate === -1) {
        return;
    }
    const updatedProducte = {
        ...DB.productes[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.productes[indexForUpdate] = updatedProducte;
    saveToDatabase(DB);
    return updatedProducte;
};

const deleteOneProducte = (producteId) => {
    const indexForDeletion = DB.productes.findIndex(
        (producte) => producte.nom === producteId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.productes.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllProductes,
    createNewProducte,
    getOneProducte,
    updateOneProducte,
    deleteOneProducte,
};