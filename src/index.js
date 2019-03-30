const express = require('express');

/**
 * constantes
 */
const port = 4040;
const apiPath = '/api';
const dashboardPath = '/dashboard';
const app = express();

// api and dashboard
const api = require("./parse-server-api");
const dashboard = require("./dashboard");

// middleware
app.use(apiPath, api.api(port, apiPath));
app.use(dashboardPath, dashboard.dashboard(port, apiPath));

// run server
app.listen(port, function() {
    console.log('Parse Server and Dashboard test runnign on port ' + port);
});

// const server = require('http').createServer(app);
// server.listen(port);


