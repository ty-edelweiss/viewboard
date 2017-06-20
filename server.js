const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

const server = http.Server(app);

const PORT = process.env.PORT || 3000;

app.use('/lib', express.static('app/lib'));
app.use('/dest', express.static('app/dest'));

app.get('/', function(req, res) {
    const stream = fs.createReadStream('app/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, function() {
    console.log('server running ...  at heroku app:' + PORT + __dirname);
});
