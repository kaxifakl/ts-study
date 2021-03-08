"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerManager = void 0;
var Config = require("./config/config.json");
var ServerManager = /** @class */ (function () {
    function ServerManager() {
    }
    ServerManager.prototype.a = function () {
        console.log(Config.host);
    };
    return ServerManager;
}());
exports.ServerManager = ServerManager;
