const express = require("express");
const { connectToDatabase } = require("./config/database-config");
const envFactorRouter = require("./route/envFactor");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", envFactorRouter);

const startServer = () => {
    app.listen(3000, () => {
        connectToDatabase();
        console.log("Server started at http://localhost:3000");
    });
};

startServer();
