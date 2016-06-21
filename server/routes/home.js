"use strict";
var Home_Route = (function () {
    function Home_Route() {
        this.path = "/";
    }
    Home_Route.prototype.response = function (req, res, next) {
        res.render("home", { name: "chris" });
    };
    return Home_Route;
}());
exports.Home_Route = Home_Route;
//# sourceMappingURL=home.js.map