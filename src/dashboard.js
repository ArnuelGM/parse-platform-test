const PasreDashboard = require('parse-dashboard');

const serverOptions = {
	appId: "qwerty",
	masterKey: "qwerty",
	appName: "MyAwesomeQwertyApp",
	primaryBackgroundColor: "#311b92",
	secondaryBackgroundColor: "#311b92",
	iconName: "icons8-linux-96.png",
	production: true,
	appNameForURL: 'qwerty'
};
const userOptions = {
	user: 'admin',
	pass: '1234',
	apps: [{
		appId: 'qwerty'
	}]
};

const options = {
	apps: [serverOptions],
	// users: [userOptions],
	iconsFolder: "src/icons"
};

exports.dashboard = function (port, mountPathServer) {
	serverOptions.serverURL = "http://localhost:" + port + mountPathServer;
    return new PasreDashboard(options, { allowInsecureHTTP: true });
}