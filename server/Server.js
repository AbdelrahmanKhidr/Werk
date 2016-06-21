"use strict";
var express = require("express");
var routes = require("./routes");
var Server = (function () {
    function Server() {
        this.port = 3000;
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        var _this = this;
        this.app.disable("x-powered-by");
        this.app.set("port", process.env.PORT || this.port);
        this.app.use(express.static(__dirname + "/public"));
        var handlebars = require('express-handlebars').create({ defaultLayout: "main" });
        this.app.engine('handlebars', handlebars.engine);
        this.app.set('view engine', 'handlebars');
        this.app.listen(this.app.get("port"), function () {
            console.log("Server running on port " + _this.app.get("port") + " Press Ctrl-C to quit");
        });
    };
    Server.prototype.routes = function () {
        var werk_routes = routes.routes;
        for (var r in werk_routes) {
            this.app.get(r, werk_routes[r]);
        }
        this.app.get('/', function (req, res) {
            res.render("home", { name: "chris" });
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=Server.js.map