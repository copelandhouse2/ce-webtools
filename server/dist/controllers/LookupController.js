'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = exports.list = undefined;

var _LookupModel = require('../models/LookupModel');

var _LookupModel2 = _interopRequireDefault(_LookupModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of values based on lookup type: i.e STATE, COUNTRTY.
var list = exports.list = function list(request, response) {

  // Listing from MySql;
  _LookupModel2.default.getLookupByType(request.params.type, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... lookup: ', request.params.type);
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get a lookup value based on a lookup code: i.e TX - Texas.
var show = exports.show = function show(request, response) {

  // Listing from MySql;
  _LookupModel2.default.getLookupByCode(request.params.type, request.params.lookupCode, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... lookup code: ', request.params.lookupCode);
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};
//# sourceMappingURL=LookupController.js.map