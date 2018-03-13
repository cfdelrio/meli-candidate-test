var express = require('express');
var app = express();
var db =[
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
    res.status(200).send( db );
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


app.get('/api/:q', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const searchTerm = req.query.q.toLowerCase();
    
    const response = db.filter(function(list) {
        // TODO refactor pls ASAP this try to catch 
        // search term from title
        if(list.items[0].title.toLowerCase().indexOf(searchTerm) !== -1){
            return true;
        }

        const listResult = list.categories.filter(function(category){
            console.log(category.toLowerCase().indexOf(searchTerm));
            if( category.toLowerCase().indexOf(searchTerm) !== -1 ){
                return true
            }
        });
        // the good approach must be using lodash lib
        // TODO refactor this piece of code when have time
        return listResult.length >= 1;
    });
    res.status(200).send(response);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})