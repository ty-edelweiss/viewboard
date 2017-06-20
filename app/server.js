const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

const server = http.Server(app);

//const ADDRESS = '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.use('/lib', express.static(__dirname + '/lib'));
app.use('/dest', express.static(__dirname + '/dest'));

app.get('/', function(req, res) {
    const stream = fs.createReadStream(__dirname + '/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

/*
server.listen(PORT, ADDRESS, function() {
    console.log('server running ...  at '+ ADDRESS + ':' + PORT);
});
*/
server.listen(PORT, function() {
    console.log('server running ...  at '+ ADDRESS + ':' + PORT);
});
