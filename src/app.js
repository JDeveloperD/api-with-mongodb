require('dotenv').config();
require('./database/Connection');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT_API;
const app = express();

// configuración
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// rutas
app.use('/api/empleados', require('./routes/employee'));
app.use('/api/contratos', require('./routes/contract'));
app.use('/api/afp', require('./routes/afp'));

// iniciando servidor
app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});
