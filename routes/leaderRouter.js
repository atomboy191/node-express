const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next) => {
        res.end('will send all the leaderes to you');
        //res.end('<html><body><h1>will send all the leaderes to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.end('will add the leader: ' + req.body.name + '  with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaderes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaderes');
    });

leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('will send defail of the leader: ' + req.params.leaderId);
        //res.end('<html><body><h1>will send all the leaderes/:leaderId to you</h1></body></html>');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaderes/' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId)
    });

module.exports = leaderRouter;