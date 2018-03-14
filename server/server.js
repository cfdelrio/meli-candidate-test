var express = require('express');
var app = express();
var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
var _ = require('lodash');

app.use('/',function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', function (req, res, next) {
    res.status(200).send( db );
})

app.get('/api/items/:id', function (req, res, next) {
    var productID = req.params.id;
    const response = db.filter(
        list => list.items[0].id === productID
    );
    res.status(200).send(response);
})


app.get('/api/:q', function (req, res, next) {
    const searchTerm = req.query.q.toLowerCase();
    const response = _.compact(_.map(db, list => {

        const productMatchedByTitle = _.filter(
            list.items, 
            product => product.title.toLowerCase().indexOf(searchTerm) >= 0
        );

        if(!_.isEmpty(productMatchedByTitle)) {
            return productMatchedByTitle;
        }

        const productMatchedByCategory= _.filter(
            list.items, 
            product => product.categories
                .find(
                    category => category.toLowerCase().indexOf(searchTerm) >= 0
                )
        );

        if(!_.isEmpty(productMatchedByCategory)) {
            return productMatchedByCategory;
        }

    }));
    const result =_.head(response);
    res.status(200).send(result);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})