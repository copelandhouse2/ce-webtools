'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = undefined;

var _SessionModel = require('../models/SessionModel');

var _SessionModel2 = _interopRequireDefault(_SessionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the session details.
var show = exports.show = function show(request, response) {

  // Listing from MySql;
  _SessionModel2.default.getSession(request.params.username, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... session info');
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};
//# sourceMappingURL=SessionController.js.map