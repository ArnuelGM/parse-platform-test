const PasreDashboard = require('parse-dashboard');
exports.dashboard = function (port){
    return new PasreDashboard({
        apps: [{
              serverURL: "http://localhost:"+ port +"/parse1",
              appId: "qwerty1",
              masterKey: "qwerty1",
              appName: "QwertyApp1"
        },{
            serverURL: "http://localhost:"+ port +"/parse2",
            appId: "qwerty2",
            masterKey: "qwerty2",
            appName: "QwertyApp2"
      }],
        users: [{
            user: 'admin',
            pass: '1234',
            apps: [{appId: 'qwerty1'}, {appId: 'qwerty2'}]
        }]
    }, { allowInsecureHTTP: true });
}