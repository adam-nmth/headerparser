var express = require('express');
var app = express();

app.get('/whoami', function (req, res) {
    var ip = req.headers["x-forwarded-for"]
    var language = req.headers["accept-language"]
    language = language.split(",")
    var software = req.headers["user-agent"]
    var start = software.indexOf("(")
    var end = software.indexOf(")")
    var fin = software.substring(start+1,end)
    var back = {
        "ipaddress": ip,
        "language": language[0],
        "software": fin
    }
  res.send(back);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});