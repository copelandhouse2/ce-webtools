"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ContactController = require("../controllers/ContactController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/contacts", _ContactController.list);

//Getting the data... just one entity
router.get("/contacts/:id", _ContactController.show);

//posting new entries to the database
router.post("/contacts", _ContactController.create);

//deleting entries from the database
router.delete("/contacts/:id", _ContactController.remove);

exports.default = router;
//# sourceMappingURL=ContactRoutes.js.map