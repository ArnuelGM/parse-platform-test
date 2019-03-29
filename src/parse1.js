const ParseServer = require('parse-server').ParseServer;
exports.api1 = function (port) {
    return  new ParseServer({
        databaseURI: 'mongodb://localhost/parsedb1',
        serverURL: 'http://localhost:'+ port +'/parse1',
        appId: 'qwerty1',
        masterKey: 'qwerty1',
        clientKey: 'qwerty1',
        restAPIKey: 'qwerty1',
        javascriptKey: 'qwerty1'
    });
}