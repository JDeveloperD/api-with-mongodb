const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', 5000);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server runing on port ${app.get('port')}`);
});