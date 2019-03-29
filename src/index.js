const express = require('express');

const port = 4040;
const app = express();

app.use('/parse1', require('./parse1').api1(port));
app.use('/parse2', require('./parse2').api2(port));
app.use('/dashboard', require('./dashboard').dashboard(port));

app.listen(port, function() {
    console.log('Parse Server and Dashboard test runnign on port ' + port);
});

// const server = require('http').createServer(app);
// server.listen(port);


