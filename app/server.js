const http = require('http');
const express = require('express');
//const favicon = require('serve-favicon');
const fs = require('fs');
const path = require('path');
const app = express();
process.env.PWD = process.cwd()

const server = http.Server(app);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.env.PWD, '../app')));

console.log(process.env.PWD);
app.get('/', function(req, res) {
    const stream = fs.createReadStream(process.env.PWD + '/app/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, function() {
    console.log('server running ...  at heroku app:' + PORT);
});
