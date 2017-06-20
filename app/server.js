const http = require('http');
const express = require('express');
const favicon = require('serve-favicon');
const fs = require('fs');
const app = express();

const server = http.Server(app);

const PORT = process.env.PORT || 3000;

pp.use(favicon(__dirname + '/public/icon/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    const stream = fs.createReadStream(__dirname + '/index.html', { encoding: 'utf8' });
    stream.pipe(res);
});

server.listen(PORT, function() {
    console.log('server running ...  at heroku app:' + PORT);
});
