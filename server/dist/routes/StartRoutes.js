"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _StartController = require("../controllers/StartController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/starts", _StartController.list);

//Getting the data... just one entity
router.get("/starts/:id", _StartController.show);

//posting new entries to the database
router.post("/starts", _StartController.create);

//deleting entries from the database
router.delete("/starts/:id", _StartController.remove);

exports.default = router;
//# sourceMappingURL=StartRoutes.js.map