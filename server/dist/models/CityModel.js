'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysqldb = require('../mysqldb');

var CityModel = {
  getCities: function getCities(callback) {
    // const SQLstmt = 'select id, city, state_prov, country from cities';
    var SQLstmt = 'select c.id, c.city, c.state_prov, l1.name state_prov_long, c.country, l2.name country_long' + ' from cities c' + ' left join lookups l1 on c.state_prov = l1.code' + ' left join lookups l2 on c.country = l2.code' + ' order by c.id';
    return (0, _mysqldb.sql)().query(SQLstmt, callback);
  },

  getCityByID: function getCityByID(id, callback) {
    var SQLstmt = 'select id, city, state_prov, country' + ' from cities where id=?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // This function handles BOTH ADD and UPDATE.
  // Basically an UPSERT feature.
  addCity: function addCity(city, callback) {
    var SQLstmt = 'insert into cities' + ' (id, city, state_prov, country, created_by, last_updated_by)' + ' values(?, ?, ?, ?, ?, ?)' + ' on duplicate key update city = ?, state_prov = ?, country = ?, last_updated_by = ?';
    var values = [city.id, city.city, city.state_prov, city.country, city.created_by, city.last_updated_by, city.city, city.state_prov, city.country, city.last_updated_by];
    // console.log("City Obj", city);
    // console.log("SQL", SQLstmt)
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  },

  deleteCity: function deleteCity(id, callback) {
    var SQLstmt = 'delete from cities where id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // right now, not using.  Leveraging the upsert functionality MySQL has.  See add.
  updateCity: function updateCity(city, callback) {
    var SQLstmt = 'update cities set city = ?, state_prov = ?, country = ?, last_updated_by = ? where id = ?';
    var values = [city.city, city.state_prov, city.country, city.last_updated_by, city.id];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  }
};

exports.default = CityModel;

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
//# sourceMappingURL=CityModel.js.map