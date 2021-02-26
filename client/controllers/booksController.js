const db = require("../models");

// Defining methods for the songController
module.exports = {
 // find all
  findAll: function (req, res) {
    db.book
      .find()
      .sort("title")
      .then(book => res.status(200).json(book))
      .catch(err => res.status(503).json(err));
  },
  
  // create
  create: function(req, res) {
    db.book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // find by id
  findById: function(req, res) {
    db.book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update
  update: function(req, res) {
    db.book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
