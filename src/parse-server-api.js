const ParseServer = require('parse-server').ParseServer;

const options = {
	databaseURI: "mongodb://localhost/parsedb",
	appId: "qwerty",
	masterKey: "qwerty",
	clientKey: "qwerty",
	restAPIKey: "qwerty",
	javascriptKey: "qwerty",
	objectIdSize: 32
};

exports.api = function (port, mountPath) {

	options.serverURL = 'http://localhost:' + port + mountPath;
	options.mountPath = mountPath;

    return  new ParseServer(options);
}

"6WOfXTk6db0bAofCFWtpkzbBd6dHs6iXzRjLaAhs";