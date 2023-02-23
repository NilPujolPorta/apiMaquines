const { v4: uuid } = require("uuid");
const Maquina = require("../database/Maquines");

const getAllMaquines = () => {
    const allMaquines = Maquina.getAllMaquines();
    return allMaquines;
};

const getOneMaquina = (maquinaId) => {
    const maquina = Maquina.getOneMaquina(maquinaId);
    return maquina;
};

// const createNewMaquina = (newMaquina) => {
//     const maquinaToInsert = {
//         ...newMaquina,
//         id: uuid(),
//         createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//         updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };
//     try {
//         const createdMaquina = Maquina.createNewMaquina(maquinaToInsert);
//         return createdMaquina;
//     } catch (error) {
//         throw error;
//     }
// };

// const updateOneMaquina = (maquinaId, changes) => {
//     const updatedMaquina = Maquina.updateOneMaquina(maquinaId, changes);
//     return updatedMaquina;
// };

// const deleteOneMaquina = (maquinaId) => {
//     Maquina.deleteOneMaquina(maquinaId);
// };

module.exports = {
    getAllMaquines,
    getOneMaquina/*,
    createNewMaquina,
    updateOneMaquina,
    deleteOneMaquina,*/
};