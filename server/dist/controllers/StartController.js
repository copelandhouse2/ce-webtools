"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.create = exports.show = exports.list = undefined;

var _StartModel = require("../models/StartModel");

var _StartModel2 = _interopRequireDefault(_StartModel);

var _JobNumberSeqModel = require("../models/JobNumberSeqModel");

var _JobNumberSeqModel2 = _interopRequireDefault(_JobNumberSeqModel);

var _mysqldb = require("../mysqldb");

var _trello = require("../trello");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function to get the list of addresses.
// import addresses from "../addresses.js";
// import AddressModel from "../models/AddressModel";
var list = exports.list = function list(request, response) {

  // Listing from mongoDB
  // AddressModel.find({}).exec()
  // .then(addresses => {
  //   return response.json(addresses);
  // });

  // Listing from MySql;
  // sql().query('SELECT id, job_number, client_id, user_id, city, subdivision, address1, address2 from starts', function(err, rows, fields) {
  _StartModel2.default.getStarts(function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... Starts');
      return response.json(rows);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to get details of one address
var show = exports.show = function show(request, response) {

  // AddressModel.findById(request.params.id).exec()
  // .then(address => {
  //   return response.json(address);
  // });

  // return response.json(addresses.find(address => address._id == request.params.id));

  _StartModel2.default.getStartByID(request.params.id, function (err, rows, fields) {
    if (!err) {
      console.log('Data retrieved... yeah!');
      return response.json(rows[0]);
    } else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
};

// function to create a address
var create = exports.create = function create(request, response) {

  // inserting into mongoDB
  // const address = new AddressModel(request.body);
  // address.save()
  // .then(c => {
  //   return response.json(c);
  // });

  // console.log("Start Controller.create request", request.body);

  // console.log("query", SQLstmt);

  // sql().query(SQLstmt, values, function (err, result) {
  _StartModel2.default.addStart(request.body, function (err, result) {
    if (err) return response.json(err); // If there is an error.

    var insertID = response.json(result.insertId);
    // console.log(insertID);

    // Get the variables.
    var _request$body = request.body,
        job_number = _request$body.job_number,
        client_id = _request$body.client_id,
        client = _request$body.client,
        owner_id = _request$body.owner_id,
        city = _request$body.city,
        subdivision = _request$body.subdivision,
        address1 = _request$body.address1,
        address2 = _request$body.address2,
        phase = _request$body.phase,
        section = _request$body.section,
        lot = _request$body.lot,
        block = _request$body.block,
        fnd_height_fr = _request$body.fnd_height_fr,
        fnd_height_fl = _request$body.fnd_height_fl,
        fnd_height_rr = _request$body.fnd_height_rr,
        fnd_height_rl = _request$body.fnd_height_rl,
        plan_type = _request$body.plan_type,
        elevation = _request$body.elevation,
        masonry = _request$body.masonry,
        garage_type = _request$body.garage_type,
        garage_entry = _request$body.garage_entry,
        garage_swing = _request$body.garage_swing,
        garage_drop = _request$body.garage_drop,
        garage_extension = _request$body.garage_extension,
        covered_patio = _request$body.covered_patio,
        bay_window = _request$body.bay_window,
        master_shower_drop = _request$body.master_shower_drop,
        bath1_shower_drop = _request$body.bath1_shower_drop,
        bath2_shower_drop = _request$body.bath2_shower_drop,
        bath3_shower_drop = _request$body.bath3_shower_drop,
        additional_options = _request$body.additional_options,
        comments = _request$body.comments,
        created_by = _request$body.created_by,
        last_updated_by = _request$body.last_updated_by,
        sequence_id = _request$body.sequence_id,
        prefix = _request$body.prefix,
        sequence = _request$body.sequence,
        year = _request$body.year,
        city_id = _request$body.city_id,
        subdivision_id = _request$body.subdivision_id;

    // Insert into Job Number Sequences now.

    var seqObj = {
      id: sequence_id,
      prefix: prefix,
      sequence: sequence,
      year: year,
      city_id: city_id,
      client_id: client_id,
      subdivision_id: subdivision_id,
      current_value: job_number,
      created_by: created_by,
      last_updated_by: last_updated_by
    };

    _JobNumberSeqModel2.default.addJobNumberSeq(seqObj, function (err, result) {
      if (err) return response.json(err);
      console.log("addStart: Job number created / updated");
    });

    // Trello card Create
    var card = {
      idList: "58224c17dec8267fc73d049f",
      name: job_number + "-" + address1 + "-" + subdivision + "-" + client,
      desc: "",
      pos: "top"
    };

    _trello.trello.post("1/cards/", card, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("Trello card created");
    });

    return insertID;
    // return response.json(result.insertId);
  }); // end of callback function and addStart
};

// function to update a start.
var update = exports.update = function update(request, response) {

  _StartModel2.default.updateStart(request.body, function (err, result) {
    if (err) return response.json(err);
    return response.json(result.updateId);
  });
};

var remove = exports.remove = function remove(request, response) {

  // AddressModel.remove({_id: request.params.id})
  // .then(addresses => {
  //   return response.json("address deleted");
  // });

  (0, _StartModel2.default)().deleteStart(request.params.id, function (err, result) {
    if (err) return response.json(err);
    return response.json("start deleted");
    // return response.json(result.insertId);
  });
};
//# sourceMappingURL=StartController.js.map