"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _SessionController = require("../controllers/SessionController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Getting the data... the entire list

// import { list, show, create, update, delete } from "../controllers/AddressController";
router.get("/session/:username", _SessionController.show);

exports.default = router;
//# sourceMappingURL=SessionRoutes.js.map