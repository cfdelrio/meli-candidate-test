var express = require('express');
var app = express();
var db = [
    {"author": {
            "name": "Joe",
            "lastName": "Beck"
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
    },
    {"author": {
        "name": "Joe",
        "lastName": "Beck"
        },   
    "categories": ["cellphone","technology"],
    "items": [{ "id": "N989",
        "title": "Cellphone",      
        "price": { "currency": "Pesos",
                    "amount": 200,
                    "decimals": 10
                },       
        "picture": "",
        "condition": "New", 
        "free_shipping": false
        }]
    }
];


app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(db);
})

app.get('/api/items/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var productID = req.params.id;
    const response = db.filter(function(list) {
        // TODO refactor pls ASAP
        return list.items[0].id === productID;
    });
    res.status(200).send(response);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})