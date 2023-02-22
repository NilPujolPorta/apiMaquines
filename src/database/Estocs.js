const DB = require("./db.json");
const { getOneProducte } = require("./Producte");
const { saveToDatabase } = require("./utils");

const getAllEstocs = () => {
    return DB.estocs;
};

const getOneEstoc = (estocId) => {
    const estoc = DB.estocs.find((estoc) => estoc.nom === estocId);
    if (!estoc) {
        return;
    }
    return estoc;
};

const createNewEstoc = (newEstoc) => {
    const isAlreadyAdded =
        DB.estocs.findIndex((estoc) => estoc.nom === newEstoc.nom) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Estoc with the name '${newEstoc.nom}' already exists`,
        };
    }
    if (getOneProducte(newEstoc.producte) === false) {
        throw {
            status: 400,
            message: `Categoria with the name '${newEstoc.producte}' does not exist`,
        };
    }
    try {
        DB.estocs.push(newEstoc);
        console.log(DB);
        saveToDatabase(DB);
        return newEstoc;
    } catch (error) {
        throw {
            status: 500,
            message: `Error while creating new estoc: ${error}`,
        };
    }
};

const updateOneEstoc = (estocId, changes) => {
    const indexForUpdate = DB.estocs.findIndex(
        (estoc) => estoc.nom === estocId
    );
    if (getOneProducte(newEstoc.producte) === false) {
        throw {
            status: 400,
            message: `Categoria with the name '${newEstoc.producte}' does not exist`,
        };
    }
    if (indexForUpdate === -1) {
        return;
    }
    const updatedEstoc = {
        ...DB.estocs[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.estocs[indexForUpdate] = updatedEstoc;
    saveToDatabase(DB);
    return updatedEstoc;
};

const deleteOneEstoc = (estocId) => {
    const indexForDeletion = DB.estocs.findIndex(
        (estoc) => estoc.nom === estocId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.estocs.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllEstocs,
    createNewEstoc,
    getOneEstoc,
    updateOneEstoc,
    deleteOneEstoc,
};