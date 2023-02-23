const DB = require("./db.json");

const getAllMaquines = () => {
    return DB.maquines;
};

const getOneMaquina = (maquinaId) => {
    const maquina = DB.maquines.find((maquina) => maquina.nom === maquinaId);
    if (!maquina) {
        return false;
    }
    return maquina;
};

// const createNewMaquina = (newMaquina) => {
//     const isAlreadyAdded =
//         DB.maquines.findIndex((maquina) => maquina.nom === newMaquina.nom) > -1;
//     if (isAlreadyAdded) {
//         throw {
//             status: 400,
//             message: `Maquina with the name '${newMaquina.nom}' already exists`,
//         };
//     }
//     try {
//         DB.maquines.push(newMaquina);
//         console.log(DB);
//         saveToDatabase(DB);
//         return newMaquina;
//     } catch (error) {
//         throw {
//             status: 500,
//             message: `Error while creating new maquina: ${error}`,
//         };
//     }
// };

// const updateOneMaquina = (maquinaId, changes) => {
//     const indexForUpdate = DB.maquines.findIndex(
//         (maquina) => maquina.nom === maquinaId
//     );
//     if (indexForUpdate === -1) {
//         return;
//     }
//     const updatedMaquina = {
//         ...DB.maquines[indexForUpdate],
//         ...changes,
//         updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };
//     DB.maquines[indexForUpdate] = updatedMaquina;
//     saveToDatabase(DB);
//     return updatedMaquina;
// };

// const deleteOneMaquina = (maquinaId) => {
//     const indexForDeletion = DB.maquines.findIndex(
//         (maquina) => maquina.nom === maquinaId
//     );
//     if (indexForDeletion === -1) {
//         return;
//     }
//     DB.maquines.splice(indexForDeletion, 1);
//     saveToDatabase(DB);
// };

module.exports = {
    getAllMaquines,
    //createNewMaquina,
    getOneMaquina/*,
    updateOneMaquina,
    deleteOneMaquina,*/
};