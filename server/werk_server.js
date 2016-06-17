var express = require('express');
var app = express();
var accessPort = 3000;
app.set("port", process.env.PORT || accessPort);
app.get('/', function (req, res) {
    res.send("express works doggy");
});
app.listen(app.get("port"), function () {
    console.log("Server running on port " + accessPort + " Press Ctrl-C to quit");
});
//# sourceMappingURL=werk_server.js.map