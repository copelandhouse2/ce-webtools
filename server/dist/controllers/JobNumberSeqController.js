'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.show = exports.list = undefined;

var _JobNumberSeqModel = require('../models/JobNumberSeqModel');

var _JobNumberSeqModel2 = _interopRequireDefault(_JobNumberSeqModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of job number sequences.
var list = exports.list = function list(request, response) {

  _JobNumberSeqModel2.default.getJobNumberSeqs(function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... job number sequences');
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get one job number sequences.
var show = exports.show = function show(request, response) {

  _JobNumberSeqModel2.default.getJobNumberSeqByID(request.params.id, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... yeah!');
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to add a job number sequences.
var create = exports.create = function create(request, response) {

  _JobNumberSeqModel2.default.addJobNumberSeq(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.insertId);
  });
};

// function to update a job number sequences.
var update = exports.update = function update(request, response) {

  _JobNumberSeqModel2.default.updateJobNumberSeq(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.updateId);
  });
};

// function to delete a job number sequences.
var remove = exports.remove = function remove(request, response) {

  _JobNumberSeqModel2.default.deleteJobNumberSeq(request.params.id, function (err, result) {
    if (err) return response.json(err);
    return response.json("job number sequence deleted");
  });
};
//# sourceMappingURL=JobNumberSeqController.js.map