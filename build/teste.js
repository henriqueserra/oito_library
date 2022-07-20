"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log(JSON.stringify((0, index_1.validaDocumento)('142.479.188-00')));
console.log(JSON.stringify((0, index_1.validanup)('1512439-81.2021.8.26.0050')));
console.log(index_1.Formatters.formatDateAndHourFromString(new Date().toISOString()));
