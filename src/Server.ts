import Config = require('./config/config.json')
export class ServerManager {
    public a(): void {
        console.log(Config.host);
    }
}