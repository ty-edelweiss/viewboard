const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

const server = http.Server(app);

const ADDRESS = '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.use('/dest', express.static(process.env.PWD + '/app/dest'));
app.use('/lib', express.static(process.env.PWD + '/app/lib'));
console.log(process.env.PWD);

app.get('/', function(req, res) {
    const stream = fs.createReadStream(process.env.PWD + '/app/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, ADDRESS, function() {
    console.log('server running ...  at '+ ADDRESS + ':' + PORT);
});
