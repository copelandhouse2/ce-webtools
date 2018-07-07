'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysqldb = require('../mysqldb');

var SubdivisionModel = {
  getSubdivisions: function getSubdivisions(callback) {
    var SQLstmt = 'select s.id, s.subdivision, s.city_id, c.city' + ' from subdivisions s' + ' left join cities c on s.city_id = c.id';
    return (0, _mysqldb.sql)().query(SQLstmt, callback);
  },

  getSubdivisionByID: function getSubdivisionByID(id, callback) {
    var SQLstmt = 'select s.id, s.subdivision, s.city_id, c.city' + ' from subdivisions s' + ' left join cities c on s.city_id = c.id' + ' where s.id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // This function handles BOTH ADD and UPDATE.
  // Basically an UPSERT feature.
  addSubdivision: function addSubdivision(subdivision, callback) {
    var SQLstmt = 'insert into subdivisions' + ' (id, subdivision, city_id, created_by, last_updated_by)' + ' values(?, ?, ?, ?, ?)' + ' on duplicate key update subdivision = ?, city_id = ?, last_updated_by = ?';
    var values = [subdivision.id, subdivision.subdivision, subdivision.city_id, subdivision.created_by, subdivision.last_updated_by, subdivision.subdivision, subdivision.city_id, subdivision.last_updated_by];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  },

  deleteSubdivision: function deleteSubdivision(id, callback) {
    var SQLstmt = 'delete from subdivisions where id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // right now, not using.  Leveraging the upsert functionality MySQL has.  See add.
  updateSubdivision: function updateSubdivision(subdivision, callback) {
    var SQLstmt = 'update subdivisions set subdivision = ?, city_id = ?, last_updated_by = ? where id = ?';
    var values = [subdivision.subdivision, subdivision.city_id, subdivision.last_updated_by, subdivision.id];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  }
};

exports.default = SubdivisionModel;

// ,
// getTaskById: function(id, callback){
//   return db.query("select * from task where Id=?",[id],callback);
// },
// addTask: function(Task, callback){
//   return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
// },
// deleteTask: function(id, callback){
//   return db.query("delete from task where Id=?",[id],callback);
// },
// updateTask: function(id, Task, callback){
//   return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
// }
//# sourceMappingURL=SubdivisionModel.js.map