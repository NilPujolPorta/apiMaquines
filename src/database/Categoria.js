const DB = require("./db.json");

const getAllCategories = () => {
    return DB.categories;
};

const getOneCategoria = (categoriaId) => {
    const categoria = DB.categories.find((categoria) => categoria.nom === categoriaId);
    if (!categoria) {
        return false;
    }
    return categoria;
};

// const createNewCategoria = (newCategoria) => {
//     const isAlreadyAdded =
//         DB.categories.findIndex((categoria) => categoria.nom === newCategoria.nom) > -1;
//     if (isAlreadyAdded) {
//         throw {
//             status: 400,
//             message: `Categoria with the name '${newCategoria.nom}' already exists`,
//         };
//     }
//     try {
//         DB.categories.push(newCategoria);
//         console.log(DB);
//         saveToDatabase(DB);
//         return newCategoria;
//     } catch (error) {
//         throw {
//             status: 500,
//             message: `Error while creating new categoria: ${error}`,
//         };
//     }
// };

// const updateOneCategoria = (categoriaId, changes) => {
//     const indexForUpdate = DB.categories.findIndex(
//         (categoria) => categoria.nom === categoriaId
//     );
//     if (indexForUpdate === -1) {
//         return;
//     }
//     const updatedCategoria = {
//         ...DB.categories[indexForUpdate],
//         ...changes,
//         updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };
//     DB.categories[indexForUpdate] = updatedCategoria;
//     saveToDatabase(DB);
//     return updatedCategoria;
// };

// const deleteOneCategoria = (categoriaId) => {
//     const indexForDeletion = DB.categories.findIndex(
//         (categoria) => categoria.nom === categoriaId
//     );
//     if (indexForDeletion === -1) {
//         return;
//     }
//     DB.categories.splice(indexForDeletion, 1);
//     saveToDatabase(DB);
// };

module.exports = {
    getAllCategories,
    //createNewCategoria,
    getOneCategoria/*,
    updateOneCategoria,
    deleteOneCategoria,*/
};