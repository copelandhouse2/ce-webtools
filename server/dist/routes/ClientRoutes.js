"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ClientController = require("../controllers/ClientController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/clients", _ClientController.list);

//Getting the data... just one entity
router.get("/clients/:id", _ClientController.show);

//posting new entries to the database
router.post("/clients", _ClientController.create);

//putting update entries to the database
router.put("/clients/:id", _ClientController.update);

//deleting entries from the database
router.delete("/clients/:id", _ClientController.remove);

exports.default = router;
//# sourceMappingURL=ClientRoutes.js.map