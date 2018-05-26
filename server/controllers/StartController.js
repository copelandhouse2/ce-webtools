// import addresses from "../addresses.js";
import AddressModel from "../models/AddressModel";
import { sql } from "../mysqldb";

// function to get the list of addresses.
export const list = (request, response) => {

  // Listing from mongoDB
  // AddressModel.find({}).exec()
  // .then(addresses => {
  //   return response.json(addresses);
  // });

  // Listing from MySql;
  sql().query('SELECT id, job_number, client_id, user_id, city, subdivision, address1, address2 from starts', function(err, rows, fields) {
    if (!err) {
      console.log('Data retrieved');
      return response.json(rows);
    }
    else {
      console.log('Error while performing Query.');
      return response.json(err);
    }
  });
}

// function to get details of one address
export const show = (request, response) => {

  AddressModel.findById(request.params.id).exec()
  .then(address => {
    return response.json(address);
  });

  // return response.json(addresses.find(address => address._id == request.params.id));
}

// function to create a address
export const create = (request, response) => {

  // inserting into mongoDB
  // const address = new AddressModel(request.body);
  // address.save()
  // .then(c => {
  //   return response.json(c);
  // });

  console.log("AddressController.create request", request.body);
  
  //inserting into mysql
  const { job_number, client_id, owner_id, city, subdivision, address1, address2, phase, section, lot, block
    , fnd_height_fr, fnd_height_fl, fnd_height_rr, fnd_height_rl, plan_type, elevation, masonry, garage_type
    , garage_entry, garage_swing, garage_drop, garage_extension, covered_patio, bay_window, master_shower_drop
    , bath1_shower_drop, bath2_shower_drop, bath3_shower_drop, additional_options, comments } = request.body;

  const values = [job_number, client_id, owner_id, city, subdivision, address1, address2, phase, section, lot, block
    , fnd_height_fr, fnd_height_fl, fnd_height_rr, fnd_height_rl, plan_type, elevation, masonry, garage_type
    , garage_entry, garage_swing, garage_drop, garage_extension, covered_patio, bay_window, master_shower_drop
    , bath1_shower_drop, bath2_shower_drop, bath3_shower_drop, additional_options, comments];

  console.log("job_number", job_number);
  console.log("city", city);
  console.log("user_id", owner_id);

  const SQLstmt = "INSERT INTO starts (job_number, client_id, user_id, city, subdivision, address1, address2, phase, section"
  + ", lot, block, fnd_height_fr, fnd_height_fl, fnd_height_rr, fnd_height_rl, plan_type, elevation, masonry, garage_type"
  + ", garage_entry, garage_swing, garage_drop, garage_extension, covered_patio, bay_window, master_shower_drop"
  + ", bath1_shower_drop, bath2_shower_drop, bath3_shower_drop, additional_options, comments)"
  + " VALUES(?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?)";

  console.log("query", SQLstmt);

  sql().query(SQLstmt, values, function(err, result) {
    if (err) {
      // console.log(response.json(err));
      return response.json(err);
    } else {
      const insertID = response.json(result.insertId);
      console.log(insertID);
      return insertID;
    };
    // return response.json(result.insertId);
  });

}

export const remove = (request, response) => {

  // AddressModel.remove({_id: request.params.id})
  // .then(addresses => {
  //   return response.json("address deleted");
  // });

  const SQLstmt = "DELETE from starts where id = ?";

  console.log("query", SQLstmt);

  sql().query(SQLstmt, [request.params.id], function(err, result) {
    if (err) return response.json(err);
    return response.json("start deleted");
    // return response.json(result.insertId);
  });
}
