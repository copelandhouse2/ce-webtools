"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _JobNumberSeqController = require("../controllers/JobNumberSeqController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list
router.get("/jobnumberseqs", _JobNumberSeqController.list);

//Getting the data... just one entity
router.get("/jobnumberseqs/:id", _JobNumberSeqController.show);

//posting new entries to the database
router.post("/jobnumberseqs", _JobNumberSeqController.create);

//putting update entries to the database
router.put("/jobnumberseqs/:id", _JobNumberSeqController.update);

//deleting entries from the database
router.delete("/jobnumberseqs/:id", _JobNumberSeqController.remove);

exports.default = router;
//# sourceMappingURL=JobNumberSeqRoutes.js.map