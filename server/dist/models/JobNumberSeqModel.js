'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysqldb = require('../mysqldb');

var JobNumberSeqModel = {
  getJobNumberSeqs: function getJobNumberSeqs(callback) {
    var SQLstmt = 'select j.id, j.prefix, j.sequence, j.year, j.city_id, ci.city, j.client_id, cl.name client' + ', j.subdivision_id, s.subdivision, j.current_value' + ' from job_number_sequences j' + ' left join subdivisions s on j.subdivision_id = s.id' + ' inner join cities ci on j.city_id = ci.id' + ' inner join clients cl on j.client_id = cl.id';
    // const SQLstmt = 'select * from job_number_sequences'
    ;
    return (0, _mysqldb.sql)().query(SQLstmt, callback);
  },

  getJobNumberSeqByID: function getJobNumberSeqByID(id, callback) {
    var SQLstmt = 'select j.id, j.prefix, j.sequence, j.year, j.city_id, ci.city, j.client_id, cl.name' + ', j.subdivision_id, s.subdivision, j.current_value' + ' from job_number_sequences j' + ' left join subdivisions s on j.subdivision_id = s.id' + ' inner join cities ci on j.city_id = ci.id' + ' inner join clients cl on j.client_id = cl.id' + ' and j.id = ?';return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  addJobNumberSeq: function addJobNumberSeq(jns, callback) {
    var SQLstmt = 'insert into job_number_sequences' + ' (id, prefix, sequence, year, city_id, client_id, subdivision_id, current_value' + ' , created_by, last_updated_by)' + ' values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)' + ' on duplicate key update prefix = ?, sequence = ?, year = ?' + ', city_id =?, client_id = ?, subdivision_id = ?, current_value = ?' + ', last_updated_by = ?';
    var values = [jns.id, jns.prefix, jns.sequence, jns.year, jns.city_id, jns.client_id, jns.subdivision_id, jns.current_value, jns.created_by, jns.last_updated_by, jns.prefix, jns.sequence, jns.year, jns.city_id, jns.client_id, jns.subdivision_id, jns.current_value, jns.last_updated_by];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  },

  deleteJobNumberSeq: function deleteJobNumberSeq(id, callback) {
    var SQLstmt = 'delete from job_number_sequences where id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  updateJobNumberSeq: function updateJobNumberSeq(jns, callback) {
    var SQLstmt = 'update job_number_sequences set prefix = ?, sequence = ?, year = ?' + ', city_id =?, client_id = ?, subdivision_id = ?, current_value = ?' + ', last_updated_by = ? where id = ?';
    var values = [jns.prefix, jns.sequence, jns.year, jns.city_id, jns.client_id, jns.subdivision_id, jns.current_value, jns.last_updated_by, jns.id];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  }
};

exports.default = JobNumberSeqModel;

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
//# sourceMappingURL=JobNumberSeqModel.js.map