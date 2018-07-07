'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.show = exports.list = undefined;

var _CityModel = require('../models/CityModel');

var _CityModel2 = _interopRequireDefault(_CityModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of cities.
var list = exports.list = function list(request, response) {

  _CityModel2.default.getCities(function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... cities');
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get one city.
var show = exports.show = function show(request, response) {

  _CityModel2.default.getCityByID(request.params.id, function (err, rows, fields) {
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

  _CityModel2.default.addCity(request.body, function (err, result) {
    if (err) {
      // console.log("there was an error");
      return response.json(err);
    }
    // const insertID = response.json(result.insertId);
    // console.log(insertID);
    // return insertID;
    return response.json(result.insertId);
    // return response.json("city added");
  });
};

// function to update a city.
var update = exports.update = function update(request, response) {

  _CityModel2.default.updateCity(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.updateId);
  });
};

// function to delete a city.
var remove = exports.remove = function remove(request, response) {

  _CityModel2.default.deleteCity(request.params.id, function (err, result) {
    if (err) return response.json(err);
    return response.json("city deleted");
  });
};
//# sourceMappingURL=CityController.js.map