var express = require('express');
var app = express();
app.set("port", process.env.PORT || 3000);
app.get('/', function (req, res) {
    res.send("express works doggy dog");
});
app.listen(app.get("port"), function () {
    console.log("It works doggy dog frog");
});
//# sourceMappingURL=werk_server.js.map