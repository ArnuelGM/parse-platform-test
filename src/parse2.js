const ParseServer = require('parse-server').ParseServer;
exports.api2 = function (port){
    return new ParseServer({
        databaseURI: 'mongodb://localhost/parsedb2',
        serverURL: 'http://localhost:'+ port +'/parse2',
        appId: 'qwerty2',
        masterKey: 'qwerty2',
        clientKey: 'qwerty2',
        restAPIKey: 'qwerty2',
        javascriptKey: 'qwerty2'
    });
};