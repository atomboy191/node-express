const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next) => {
        res.end('will send all the promoes to you');
        //res.end('<html><body><h1>will send all the promoes to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.end('will add the promo: ' + req.body.name + '  with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promoes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promoes');
    });

promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end('will send defail of the promo: ' + req.params.promoId);
        //res.end('<html><body><h1>will send all the promoes/:promoId to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promoes/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Updating the promo: ' + req.params.promoId + '\n');
        res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promo: ' + req.params.promoId)
    });

module.exports = promoRouter;