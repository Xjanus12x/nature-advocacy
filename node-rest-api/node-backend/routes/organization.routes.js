const express = require("express");
const app = express();

const organizationRoute = express.Router();
let organization = require("../model/organization");

// Add Book
organizationRoute.route("/add-organization").post((req, res, next) => {
  organization.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Book
organizationRoute.route("/").get((req, res) => {
  organization.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Book
organizationRoute.route("/read-organization/:id").get((req, res) => {
  organization.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Book
organizationRoute.route("/update-organization/:id").put((req, res, next) => {
  organization.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Book updated successfully!");
      }
    }
  );
});

// Delete Book
organizationRoute.route("/delete-organization/:id").delete((req, res, next) => {
  organization.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = organizationRoute;
