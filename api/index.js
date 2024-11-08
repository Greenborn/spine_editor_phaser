const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser")
const fs = require("fs")
const cors = require("cors")
dotenv.config();

const app = express();
const port = process.env.service_port_api;


let cors_origin = process.env.cors_origin.split(' ')
let corsOptions = {
    credentials: true,
    origin: cors_origin
}
app.use(cors(corsOptions))

app.use(bodyParser.json({ limit: '10mb' }));

app.use("/", express.static('visor'))

app.get('/get', (req, res) => {
    console.log('/get')//, req.body);

    return res.status(200).send({ "item": true });
});



app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});