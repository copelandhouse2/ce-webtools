'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.show = exports.list = undefined;

var _SubdivisionModel = require('../models/SubdivisionModel');

var _SubdivisionModel2 = _interopRequireDefault(_SubdivisionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of subdivisions.
var list = exports.list = function list(request, response) {

  _SubdivisionModel2.default.getSubdivisions(function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... subdivisions');
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get one subdivision.
var show = exports.show = function show(request, response) {

  _SubdivisionModel2.default.getSubdivisionByID(request.params.id, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... yeah!');
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to add a subdivision.
var create = exports.create = function create(request, response) {

  _SubdivisionModel2.default.addSubdivision(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.insertId);
  });
};

// function to update a subdivision.
var update = exports.update = function update(request, response) {

  _SubdivisionModel2.default.updateSubdivision(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.updateId);
  });
};

// function to delete a subdivision.
var remove = exports.remove = function remove(request, response) {

  _SubdivisionModel2.default.deleteSubdivision(request.params.id, function (err, result) {
    if (err) return response.json(err);
    return response.json("subdivision deleted");
  });
};
//# sourceMappingURL=SubdivisionController.js.map