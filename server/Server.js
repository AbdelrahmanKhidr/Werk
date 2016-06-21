"use strict";
var express = require("express");
var Server = (function () {
    function Server() {
        this.app = express();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
//# sourceMappingURL=Server.js.map