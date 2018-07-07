'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysqldb = require('../mysqldb');

var ClientModel = {
  getClients: function getClients(callback) {
    var SQLstmt = 'select id, name, full_name, compliance_dl, active, notes from clients';
    return (0, _mysqldb.sql)().query(SQLstmt, callback);
  },

  getClientByID: function getClientByID(id, callback) {
    var SQLstmt = 'select id, name, full_name, compliance_dl, active, notes from clients where id=?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // This function handles BOTH ADD and UPDATE.
  // Basically an UPSERT feature.
  addClient: function addClient(client, callback) {
    var SQLstmt = 'insert into clients' + ' (id, name, full_name, compliance_dl, active, notes, created_by, last_updated_by)' + ' values (?, ?, ?, ?, ?, ?, ?, ?)' + ' on duplicate key update name = ?, full_name = ?, compliance_dl = ?, active = ?, notes = ?, last_updated_by = ?';

    var values = [client.id, client.name, client.full_name, client.compliance_dl, client.active, client.notes, client.created_by, client.last_updated_by, client.name, client.full_name, client.compliance_dl, client.active, client.notes, client.last_updated_by];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  },

  deleteClient: function deleteClient(id, callback) {
    var SQLstmt = 'delete from clients where id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // right now, not using.  Leveraging the upsert functionality MySQL has.  See add.
  updateClient: function updateClient(client, callback) {
    var SQLstmt = 'update clients set name = ?, full_name = ?, compliance_dl = ?, active = ?' + ', notes = ?, last_updated_by = ? where id = ?';
    var values = [client.name, client.full_name, client.compliance_dl, client.active, client.notes, client.last_updated_by, client.id];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  }
};

exports.default = ClientModel;

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
//# sourceMappingURL=ClientModel.js.map