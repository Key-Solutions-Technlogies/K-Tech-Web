"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTipoServicio = exports.updateServicio = exports.updateCotizacion = exports.updateCliente = exports.setUsuario = exports.setTipoServicio = exports.setServicio = exports.setCotizaciones = exports.setCliente = exports.getUsuarios = exports.getTipoServicios = exports.getServicios = exports.getServicioId = exports.getServicioFecha = exports.getServicioCliente = exports.getCotizaciones = exports.getCotizacionTipoServicio = exports.getCotizacionId = exports.getCotizacionCliente = exports.getClientes = exports.getClienteId = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//tipoServicios
var getTipoServicios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var conn, _yield$conn$query, _yield$conn$query2, rows;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context.sent;
          _context.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.tipoServicio');
        case 5:
          _yield$conn$query = _context.sent;
          _yield$conn$query2 = _slicedToArray(_yield$conn$query, 1);
          rows = _yield$conn$query2[0];
          console.log(rows);
          res.json(rows);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTipoServicios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//post tipoServicios
exports.getTipoServicios = getTipoServicios;
var setTipoServicio = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context2.sent;
          _context2.next = 5;
          return conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.tipoServicio (tipoServicio,descripcion) VALUES(?,?)', [req.body.tipoServicio, req.body.descripcion]);
        case 5:
          result = _context2.sent;
          res.json(result[0]["insertId"]);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setTipoServicio(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.setTipoServicio = setTipoServicio;
var updateTipoServicio = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context3.sent;
          _context3.next = 5;
          return conn.query('UPDATE bv4rkfhexrvnpun4adpx.tipoServicio SET tipoServicio =?, descripcion =? WHERE idTipoServicio =?', [req.body.tipoServicio, req.body.descripcion, req.params.idTipoServicio]);
        case 5:
          result = _context3.sent;
          //Retorno de numero de filas cambiadas
          res.json(result[0]["changedRows"]);
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updateTipoServicio(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Cotizaciones
exports.updateTipoServicio = updateTipoServicio;
var getCotizaciones = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var conn, _yield$conn$query3, _yield$conn$query4, rows;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context4.sent;
          _context4.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion');
        case 5:
          _yield$conn$query3 = _context4.sent;
          _yield$conn$query4 = _slicedToArray(_yield$conn$query3, 1);
          rows = _yield$conn$query4[0];
          console.log(rows);
          res.json(rows);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getCotizaciones(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getCotizaciones = getCotizaciones;
var getCotizacionId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var conn, _yield$conn$query5, _yield$conn$query6, rows;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context5.sent;
          _context5.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idConsulta = ?', [req.params.id]);
        case 5:
          _yield$conn$query5 = _context5.sent;
          _yield$conn$query6 = _slicedToArray(_yield$conn$query5, 1);
          rows = _yield$conn$query6[0];
          console.log(rows);
          res.json(rows);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getCotizacionId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getCotizacionId = getCotizacionId;
var getCotizacionTipoServicio = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var conn, _yield$conn$query7, _yield$conn$query8, rows;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context6.sent;
          _context6.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idTipoServicio =?', [req.params.id]);
        case 5:
          _yield$conn$query7 = _context6.sent;
          _yield$conn$query8 = _slicedToArray(_yield$conn$query7, 1);
          rows = _yield$conn$query8[0];
          console.log(rows);
          res.json(rows);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getCotizacionTipoServicio(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getCotizacionTipoServicio = getCotizacionTipoServicio;
var getCotizacionCliente = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var conn, _yield$conn$query9, _yield$conn$query10, rows;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context7.sent;
          _context7.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cotizacion WHERE bv4rkfhexrvnpun4adpx.Cotizacion.idCliente =?', [req.params.id]);
        case 5:
          _yield$conn$query9 = _context7.sent;
          _yield$conn$query10 = _slicedToArray(_yield$conn$query9, 1);
          rows = _yield$conn$query10[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getCotizacionCliente(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getCotizacionCliente = getCotizacionCliente;
var setCotizaciones = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context8.sent;
          _context8.next = 5;
          return conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Cotizacion(Fecha,Estado,Mensaje,idTipoServicio,idCliente) VALUES(?,?, ?,?,?)', [req.body.fecha, "En espera", req.body.mensaje, req.body.idTipoServicio, req.body.idCliente]);
        case 5:
          result = _context8.sent;
          res.json(result[0]["insertId"]);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function setCotizaciones(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.setCotizaciones = setCotizaciones;
var updateCotizacion = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context9.sent;
          _context9.next = 5;
          return conn.query('UPDATE bv4rkfhexrvnpun4adpx.Cotizacion SET Fecha =?, Estado =?, Mensaje =? WHERE idConsulta =?', [req.body.fecha, req.body.estado, req.body.mensaje, req.params.cotizacion]);
        case 5:
          result = _context9.sent;
          console.log(result);
          res.json(result[0]["changedRows"]);
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function updateCotizacion(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

//SERVICIOS API
exports.updateCotizacion = updateCotizacion;
var getServicios = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var conn, _yield$conn$query11, _yield$conn$query12, rows;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context10.sent;
          _context10.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio');
        case 5:
          _yield$conn$query11 = _context10.sent;
          _yield$conn$query12 = _slicedToArray(_yield$conn$query11, 1);
          rows = _yield$conn$query12[0];
          console.log(rows);
          res.json(rows);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getServicios(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getServicios = getServicios;
var setServicio = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context11.sent;
          _context11.next = 5;
          return conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Servicio(idTipoServicio,Descripcion,Costo,FechaInicio,FechaFin,idCliente) VALUES(?,?,?,?,?,?)', [req.body.idTipoServicio, req.body.descripcion, req.body.costo, req.body.fechaInicio, req.body.fechaFin, req.body.idCliente]);
        case 5:
          result = _context11.sent;
          res.json(result[0]["insertId"]);
          console.log(result);
        case 8:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function setServicio(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.setServicio = setServicio;
var getServicioId = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var conn, _yield$conn$query13, _yield$conn$query14, rows;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context12.sent;
          _context12.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.idServicio =?', [req.params.id]);
        case 5:
          _yield$conn$query13 = _context12.sent;
          _yield$conn$query14 = _slicedToArray(_yield$conn$query13, 1);
          rows = _yield$conn$query14[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getServicioId(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getServicioId = getServicioId;
var getServicioFecha = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var conn, _yield$conn$query15, _yield$conn$query16, rows;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context13.sent;
          _context13.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.fechaInicio =?', [req.params.fechaInicio]);
        case 5:
          _yield$conn$query15 = _context13.sent;
          _yield$conn$query16 = _slicedToArray(_yield$conn$query15, 1);
          rows = _yield$conn$query16[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function getServicioFecha(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getServicioFecha = getServicioFecha;
var getServicioCliente = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var conn, _yield$conn$query17, _yield$conn$query18, rows;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context14.sent;
          _context14.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Servicio WHERE bv4rkfhexrvnpun4adpx.Servicio.idCliente =?', [req.params.id]);
        case 5:
          _yield$conn$query17 = _context14.sent;
          _yield$conn$query18 = _slicedToArray(_yield$conn$query17, 1);
          rows = _yield$conn$query18[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getServicioCliente(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getServicioCliente = getServicioCliente;
var updateServicio = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context15.sent;
          _context15.next = 5;
          return conn.query('UPDATE bv4rkfhexrvnpun4adpx.Servicio SET idTipoServicio =?, Descripcion =?, Costo =?, FechaInicio =?, FechaFin =?, idCliente =? WHERE idServicio =?', [req.body.idTipoServicio, req.body.descripcion, req.body.costo, req.body.fechaInicio, req.body.fechaFin, req.body.idCliente, req.params.id]);
        case 5:
          result = _context15.sent;
          res.json(result[0]["changedRows"]);
          console.log(result);
        case 8:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function updateServicio(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.updateServicio = updateServicio;
var setCliente = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context16.sent;
          _context16.next = 5;
          return conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Cliente(Nombre,Apellido,Correo,Empresa)VALUES(?,?,?,?)', [req.body.nombre, req.body.apellido, req.body.correo, req.body.empresa]);
        case 5:
          result = _context16.sent;
          console.log(result);
          res.json(result[0]["insertId"]);
        case 8:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function setCliente(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.setCliente = setCliente;
var updateCliente = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context17.sent;
          _context17.next = 5;
          return conn.query('UPDATE bv4rkfhexrvnpun4adpx.Cliente SET Nombre =?, Apellido =?, Correo =?, Empresa =? WHERE idCliente =?', [req.body.nombre, req.body.apellido, req.body.correo, req.body.empresa, req.params.id]);
        case 5:
          result = _context17.sent;
          res.json(result[0]["changedRows"]);
          console.log(result);
        case 8:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function updateCliente(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.updateCliente = updateCliente;
var getClientes = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var conn, _yield$conn$query19, _yield$conn$query20, rows;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context18.sent;
          _context18.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cliente');
        case 5:
          _yield$conn$query19 = _context18.sent;
          _yield$conn$query20 = _slicedToArray(_yield$conn$query19, 1);
          rows = _yield$conn$query20[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getClientes(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getClientes = getClientes;
var getClienteId = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var conn, _yield$conn$query21, _yield$conn$query22, rows;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context19.sent;
          _context19.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cliente WHERE idCliente = ?', [req.params.idCliente]);
        case 5:
          _yield$conn$query21 = _context19.sent;
          _yield$conn$query22 = _slicedToArray(_yield$conn$query21, 1);
          rows = _yield$conn$query22[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getClienteId(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getClienteId = getClienteId;
var getUsuarios = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var conn, _yield$conn$query23, _yield$conn$query24, rows;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context20.sent;
          _context20.next = 5;
          return conn.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Usuario');
        case 5:
          _yield$conn$query23 = _context20.sent;
          _yield$conn$query24 = _slicedToArray(_yield$conn$query23, 1);
          rows = _yield$conn$query24[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getUsuarios(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
exports.getUsuarios = getUsuarios;
var setUsuario = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var conn, result;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _database.connect)();
        case 2:
          conn = _context21.sent;
          _context21.next = 5;
          return conn.query('INSERT INTO bv4rkfhexrvnpun4adpx.Usuario(correo,password,numeroTelefono)VALUES(?,?,?)', [req.body.correo, req.body.password, req.body.numeroTelefono]);
        case 5:
          result = _context21.sent;
          console.log(result);
          res.json(result[0]["insertId"]);
        case 8:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function setUsuario(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.setUsuario = setUsuario;