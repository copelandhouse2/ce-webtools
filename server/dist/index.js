"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mysqldb = require("./mysqldb");

var _trello = require("./trello");

var _SessionRoutes = require("./routes/SessionRoutes");

var _SessionRoutes2 = _interopRequireDefault(_SessionRoutes);

var _StartRoutes = require("./routes/StartRoutes");

var _StartRoutes2 = _interopRequireDefault(_StartRoutes);

var _ClientRoutes = require("./routes/ClientRoutes");

var _ClientRoutes2 = _interopRequireDefault(_ClientRoutes);

var _CityRoutes = require("./routes/CityRoutes");

var _CityRoutes2 = _interopRequireDefault(_CityRoutes);

var _SubdivisionRoutes = require("./routes/SubdivisionRoutes");

var _SubdivisionRoutes2 = _interopRequireDefault(_SubdivisionRoutes);

var _JobNumberSeqRoutes = require("./routes/JobNumberSeqRoutes");

var _JobNumberSeqRoutes2 = _interopRequireDefault(_JobNumberSeqRoutes);

var _LookupRoutes = require("./routes/LookupRoutes");

var _LookupRoutes2 = _interopRequireDefault(_LookupRoutes);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MongoDB connection
// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://public:public@ds257858.mlab.com:57858/checkpoint2");

(0, _mysqldb.connect)(_mysqldb.TEST_MODE, function (err) {
  if (!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});
// import mongoose from "mongoose";


(0, _trello.tconnect)(_trello.TEST, function (err) {
  if (!err) {
    console.log("Trello is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

var wwwPath = _path2.default.join(__dirname, "www");
app.use("/", _express2.default.static(wwwPath));

app.use(_SessionRoutes2.default);
app.use(_StartRoutes2.default);
app.use(_ClientRoutes2.default);
// app.use(ContactRoutes);
app.use(_CityRoutes2.default);
app.use(_SubdivisionRoutes2.default);
app.use(_JobNumberSeqRoutes2.default);
app.use(_LookupRoutes2.default);

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});
//# sourceMappingURL=index.js.map