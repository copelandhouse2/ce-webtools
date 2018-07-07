"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _SubdivisionController = require("../controllers/SubdivisionController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/subdivisions", _SubdivisionController.list);

//Getting the data... just one entity
router.get("/subdivisions/:id", _SubdivisionController.show);

//posting new entries to the database
router.post("/subdivisions", _SubdivisionController.create);

//deleting entries from the database
router.delete("/subdivisions/:id", _SubdivisionController.remove);

exports.default = router;
//# sourceMappingURL=SubdivisionRoutes.js.map