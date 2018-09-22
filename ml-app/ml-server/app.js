const express = require('express');
const app = express();
const cors = require('cors');
const server = require('./config').server;

app.use(cors());

require('./routes/index')(app);

app.listen(server.port, () => {
 console.log('Server running on port ' + server.port);
});
