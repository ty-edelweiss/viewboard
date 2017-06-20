const http = require('http');
const express = require('express');
//const favicon = require('serve-favicon');
const fs = require('fs');
const path = require('path');
const app = express();

const server = http.Server(app);

const PORT = process.env.PORT || 3000;

app.use('/dest', express.static(path.join(__dirname, './dest')));

console.log(process.env.PWD);
app.get('/', function(req, res) {
    const stream = fs.createReadStream(path.join(__dirname, './index.html'), { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, function() {
    console.log('server running ...  at heroku app:' + PORT);
});
