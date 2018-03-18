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
    const response = _.map(db, products => {
        const productMatchedById = _.filter(
            products.items, 
            product => product.id === productID
        );
        if(!_.isEmpty(productMatchedById)) {
            return productMatchedById;
        }
    });

    res.status(200).send(
        (_.first(_.compact(response))
    ));
})


app.get('/api/:q', function (req, res, next) {
    const searchTerm = req.query.q;
    const response = _.map(db, list => {
        const regex = new RegExp(`.[${searchTerm}]*`,'i');

        const productMatchedByTitle = _.filter(
            list.items, 
            product => {
                if(product.title.match(searchTerm)){
                    return true;
                }

                if(!_.isEmpty( _.filter(
                    product.categories,
                    item => item.match( searchTerm )))
                ){
                    return true;
                }
            }
        );

        if(!_.isEmpty(productMatchedByTitle)) {
            return productMatchedByTitle;
        }
    });

    res.status(200).send((_.first(_.compact(response))));
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});