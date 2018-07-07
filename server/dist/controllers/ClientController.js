'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.show = exports.list = undefined;

var _ClientModel = require('../models/ClientModel');

var _ClientModel2 = _interopRequireDefault(_ClientModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of cities.
var list = exports.list = function list(request, response) {

  _ClientModel2.default.getClients(function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... clients');
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get one city.
var show = exports.show = function show(request, response) {

  _ClientModel2.default.getClientByID(request.params.id, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... yeah!');
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to add a city.
var create = exports.create = function create(request, response) {

  _ClientModel2.default.addClient(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.insertId);
  });
};

// function to update a city.
var update = exports.update = function update(request, response) {

  _ClientModel2.default.updateClient(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.updateId);
  });
};

// function to delete a city.
var remove = exports.remove = function remove(request, response) {

  _ClientModel2.default.deleteClient(request.params.id, function (err, result) {
    if (err) return response.json(err);
    return response.json("city deleted");
  });
};
//# sourceMappingURL=ClientController.js.map