"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _CityController = require("../controllers/CityController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/cities", _CityController.list);

//Getting the data... just one entity
router.get("/cities/:id", _CityController.show);

//posting new entries to the database
router.post("/cities", _CityController.create);

//putting update entries to the database
router.put("/cities/:id", _CityController.update);

//deleting entries from the database
router.delete("/cities/:id", _CityController.remove);

exports.default = router;
//# sourceMappingURL=CityRoutes.js.map