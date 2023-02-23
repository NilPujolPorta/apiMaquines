const maquinaService = require("../services/maquinaService");

const getAllMaquines = (req, res) => {
    const allMaquines = maquinaService.getAllMaquines();
    res.send({ status: "OK", data: allMaquines });
};

const getOneMaquina = (req, res) => {
    const {
        params: { maquinaId },
    } = req;
    if (!maquinaId) {
        return;
    }
    const maquina = maquinaService.getOneMaquina(maquinaId);
    res.send({ status: "OK", data: maquina });
};

// const createNewMaquina = (req, res) => {
//     const { body } = req;
//     if (
//         !body.municipi ||
//         !body.adreca
//     ) {
//         res
//             .status(400)
//             .send({
//                 status: "FAILED",
//                 data: {
//                     error:
//                         "One of the following keys is missing or is empty in request body: 'nom', 'tipus', 'preu', 'categoria'",
//                 },
//             });
//         return;
//     }
//     const newMaquina = {
//         producte: body.minicipi,
//         caducitat: body.adreca
//     };
//     try {
//         const createdMaquina = maquinaService.createNewMaquina(newMaquina);
//         res.status(201).send({ status: "OK", data: createdMaquina });
//     } catch (error) {
//         res
//             .status(error?.status || 500)
//             .send({ status: "FAILED", data: { error: error?.message || error } });
//     }
// };

// const updateOneMaquina = (req, res) => {
//     const {
//         body,
//         params: { maquinaId },
//     } = req;
//     if (!maquinaId) {
//         return;
//     }
//     const updatedMaquina = maquinaService.updateOneMaquina(maquinaId, body);
//     res.send({ status: "OK", data: updatedMaquina });
// };

// const deleteOneMaquina = (req, res) => {
//     const {
//         params: { maquinaId },
//     } = req;
//     if (!maquinaId) {
//         return;
//     }
//     maquinaService.deleteOneMaquina(maquinaId);
//     res.status(204).send({ status: "OK" });
// };

module.exports = {
    getAllMaquines,
    getOneMaquina/*,
    createNewMaquina,
    updateOneMaquina,
    deleteOneMaquina,*/
};