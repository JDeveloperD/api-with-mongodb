require('dotenv').config();
require('./database/Connection');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT_API;
const app = express();

app.use(bodyParser.json());

// routes
app.use('/api/empleados', require('./routes/employee'));
app.use('/api/contratos', require('./routes/contract'));
app.use('/api/afp', require('./routes/afp'));

// starting the server
app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});
