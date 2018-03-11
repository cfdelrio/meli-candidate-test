var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        {   "author": 
            {
            "name": "Joe",
             "lastname": "Beck"
            },   
            "categories": ["cellphone","technology"],
            "items": [{ "id": "N98",
                        "title": "Cellphone",      
                        "price": { "currency": "Pesos",
                         "amount": 200,
                         "decimals": 0
                        },       
                        "picture": "",
                        "condition": "New", 
                        "free_shipping": false
                    }]
        }  
    ));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})