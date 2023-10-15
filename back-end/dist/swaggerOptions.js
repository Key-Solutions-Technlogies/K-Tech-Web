"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "K-TECH API",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/**/*.js"]
};
exports.options = options;