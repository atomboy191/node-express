const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next) => {
        res.end('will send all the dishes to you');
        //res.end('<html><body><h1>will send all the dishes to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.end('will add the dish: ' + req.body.name + '  with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes');
    });

dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end('will send defail of the dish: ' + req.params.dishId);
        //res.end('<html><body><h1>will send all the dishes/:dishId to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishId)
    });

module.exports = dishRouter;