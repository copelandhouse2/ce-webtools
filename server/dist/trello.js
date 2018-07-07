"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tconnect = exports.trello = exports.PROD = exports.TEST = undefined;

var _nodeTrello = require("node-trello");

var _nodeTrello2 = _interopRequireDefault(_nodeTrello);

var _envVars = require("./envVars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEST = exports.TEST = "trello";
var PROD = exports.PROD = "trello";

var key = _envVars.env.TRELLO_KEY;
var token = _envVars.env.TRELLO_TOKEN;
console.log(key, token);

// Gives me a connected Trello object to import and use to perform Trello tasks
var trello = exports.trello = null;

var tconnect = exports.tconnect = function tconnect(mode, callback) {
  // console.log(key, token);

  exports.trello = trello = new _nodeTrello2.default(key, token);

  // console.log("trello inside tconnect", trello)

  callback();
};
//# sourceMappingURL=trello.js.map