"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _LookupController = require("../controllers/LookupController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/lookups/:type", _LookupController.list);

//Getting the data... just one entity
// router.get("/lookups/:type/:code", show);

exports.default = router;
//# sourceMappingURL=LookupRoutes.js.map