const express = require("express");
const bodyparser = require("body-parser");
const leaderRouter = express.Router();

leaderRouter.use(bodyparser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaders to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leaders: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all leaders");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      `Will send the details of the leaders: ${req.params.leaderId} to you!`
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      `POST operation is not supported on /leaders/${req.params.leaderId}`
    );
  })
  .put((req, res, next) => {
    res.write("Updating the leaders: " + req.params.leaderId + "\n");
    res.end(
      `Will update the leaders: ${req.body.name} and with details: ${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`Deleting leaders: ${req.params.leaderId}`);
  });

module.exports = leaderRouter;
