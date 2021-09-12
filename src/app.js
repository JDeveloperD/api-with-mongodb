require('dotenv').config();
require('./database/Connection');
require('./controllers/Controllers');

const express = require('express');
const morgan = require('morgan');
// const EmployeeController = require('./controllers/EmployeeController');

const app = express();

// settings
app.set('port', 5000);
app.use(require('./routes/index'));
app.use('/api/empleados', require('./routes/employee'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server runing on port ${app.get('port')}`);
});

