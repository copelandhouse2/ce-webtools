"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sql = exports.connect = exports.PROD_MODE = exports.TEST_MODE = undefined;

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _async = require("async");

var _async2 = _interopRequireDefault(_async);

var _envVars = require("./envVars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROD_DB = "copelandeng";
var TEST_DB = "copelandeng";

var TEST_MODE = exports.TEST_MODE = "test_mode";
var PROD_MODE = exports.PROD_MODE = "prod_mode";

var state = {
  pool: null,
  mode: null
};

var connect = exports.connect = function connect(mode, done) {
  state.pool = _mysql2.default.createPool({
    host: _envVars.env.HOST,
    user: _envVars.env.DBUSER,
    password: _envVars.env.DBPASSWORD,
    database: mode === PROD_MODE ? PROD_DB : TEST_DB
  });

  state.mode = mode;
  done();
};

var sql = exports.sql = function sql() {
  return state.pool;
};

// export const fixtures = (data) => {
//   const pool = state.pool;
//   if (!pool) return done(new Error('Missing database connection.'));

//   const names = Object.keys(data.tables);
//   async.each(names, function(name, cb) {
//     async.each(data.tables[name], function(row, cb) {

//       const keys = Object.keys(row);
//       const values = keys.map(function(key) { return "'" + row[key] + "'" });

//       pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
//     }, cb);
//   }, done);
// }

// export const drop = function(tables, done) {

//   const pool = state.pool;
//   if (!pool) return done(new Error('Missing database connection.'));

//   async.each(tables, function(name, cb) {
//     pool.query('DELETE * FROM ' + name, cb);
//   }, done);
// }
//# sourceMappingURL=mysqldb.js.map