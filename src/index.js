const express = require("express");
const v1ProducteRouter = require("./v1/routes/producteRoutes");
const v1EstocRouter = require("./v1/routes/estocRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/v1/productes", v1ProducteRouter);
app.use("/api/v1/estocs", v1EstocRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});