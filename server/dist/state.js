"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({
  addresses: [],
  clients: [],
  cities: [],
  subdivisions: [],
  contacts: [],
  session: {},
  jobnumberseqs: [],
  lookupList: []
}, "session", {
  user_id: null,
  username: "",
  auth_key: "",
  authenticated: false,
  contact_id: null,
  full_name: "",
  role: "",
  client_id: null,
  client_name: ""
});
//# sourceMappingURL=state.js.map