'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysqldb = require('../mysqldb');

var StartModel = {
  getStarts: function getStarts(callback) {
    // const SQLstmt = 'select id, city, state_prov, country from cities';
    var SQLstmt = 'SELECT id, job_number, client_id, user_id, city, subdivision, address1, address2' + ' from starts';
    return (0, _mysqldb.sql)().query(SQLstmt, callback);
  },

  getStartByID: function getStartByID(id, callback) {
    var SQLstmt = 'SELECT id, job_number, client_id, user_id, city, subdivision, address1, address2' + ' from starts' + ' where id = ?';
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // This function handles BOTH ADD and UPDATE.
  // Basically an UPSERT feature.
  addStart: function addStart(start, callback) {

    //inserting into mysql
    var job_number = start.job_number,
        client_id = start.client_id,
        client = start.client,
        owner_id = start.owner_id,
        city = start.city,
        subdivision = start.subdivision,
        address1 = start.address1,
        address2 = start.address2,
        phase = start.phase,
        section = start.section,
        lot = start.lot,
        block = start.block,
        fnd_height_fr = start.fnd_height_fr,
        fnd_height_fl = start.fnd_height_fl,
        fnd_height_rr = start.fnd_height_rr,
        fnd_height_rl = start.fnd_height_rl,
        plan_type = start.plan_type,
        elevation = start.elevation,
        masonry = start.masonry,
        garage_type = start.garage_type,
        garage_entry = start.garage_entry,
        garage_swing = start.garage_swing,
        garage_drop = start.garage_drop,
        garage_extension = start.garage_extension,
        covered_patio = start.covered_patio,
        bay_window = start.bay_window,
        master_shower_drop = start.master_shower_drop,
        bath1_shower_drop = start.bath1_shower_drop,
        bath2_shower_drop = start.bath2_shower_drop,
        bath3_shower_drop = start.bath3_shower_drop,
        additional_options = start.additional_options,
        comments = start.comments,
        created_by = start.created_by,
        last_updated_by = start.last_updated_by;


    var values = [job_number, client_id, owner_id, city, subdivision, address1, address2, phase, section, lot, block, fnd_height_fr, fnd_height_fl, fnd_height_rr, fnd_height_rl, plan_type, elevation, masonry, garage_type, garage_entry, garage_swing, garage_drop, garage_extension, covered_patio, bay_window, master_shower_drop, bath1_shower_drop, bath2_shower_drop, bath3_shower_drop, additional_options, comments, created_by, last_updated_by];

    // console.log("job_number", job_number);
    // console.log("city", city);
    // console.log("user_id", owner_id);

    var SQLstmt = "INSERT INTO starts (job_number, client_id, user_id, city, subdivision, address1, address2, phase, section" + ", lot, block, fnd_height_fr, fnd_height_fl, fnd_height_rr, fnd_height_rl, plan_type, elevation, masonry, garage_type" + ", garage_entry, garage_swing, garage_drop, garage_extension, covered_patio, bay_window, master_shower_drop" + ", bath1_shower_drop, bath2_shower_drop, bath3_shower_drop, additional_options, comments, created_by, last_updated_by)" + " VALUES(?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?,?,?)";

    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  },

  deleteStart: function deleteStart(id, callback) {
    var SQLstmt = "DELETE from starts where id = ?";
    // console.log("query", SQLstmt);
    return (0, _mysqldb.sql)().query(SQLstmt, [id], callback);
  },

  // right now, not using.  Leveraging the upsert functionality MySQL has.  See add.
  updateStart: function updateStart(city, callback) {
    var SQLstmt = 'update starts set 1=1';
    var values = [];
    return (0, _mysqldb.sql)().query(SQLstmt, values, callback);
  }
};

exports.default = StartModel;
//# sourceMappingURL=StartModel.js.map