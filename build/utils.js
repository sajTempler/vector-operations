"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDegrees = exports.toRadians = void 0;
const toRadians = (degrees) => degrees * (Math.PI / 180);
exports.toRadians = toRadians;
const toDegrees = (radians) => (radians * 180) / Math.PI;
exports.toDegrees = toDegrees;
