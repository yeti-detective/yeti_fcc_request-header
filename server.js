var express = require('express');
var app = express();

app.get('*', function(req, res){
    var ipaddress = req.headers["x-forwarded-for"];
    var language = req.headers['accept-language'].slice(0, req.headers['accept-language'].indexOf(";"));
    var software = req.headers["user-agent"].slice(req.headers["user-agent"].indexOf('('), req.headers["user-agent"].indexOf(')') + 1);
    
    res.send(JSON.stringify({'ipaddress': ipaddress, "language": language, 'software': software}));
});

app.listen(8080, function(){
    console.log("app listening on port 8080");
})