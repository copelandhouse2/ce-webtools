"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  jobNumber: {
    required: true,
    type: String
  },
  address1: {
    required: true,
    type: String
  },
  address2: {
    required: false,
    type: String
  },
  city: {
    required: false,
    type: String
  },
  subdivision: {
    required: false,
    type: String
  },
  PI: {
    required: false,
    type: String
  },
  client: {
    required: true,
    type: String
  }
});

exports.default = _mongoose2.default.model("Address", schema);
//# sourceMappingURL=AddressModel.js.map