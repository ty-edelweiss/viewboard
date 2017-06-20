const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

const server = http.Server(app);

const PORT = process.env.PORT || 3000;

app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/dest', express.static(__dirname + '/app/dest'));

app.get('/', function(req, res) {
    const stream = fs.createReadStream(__dirname + '/app/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, function() {
    console.log('server running ...  at heroku app:' + PORT);
});
