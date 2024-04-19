"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consumers_1 = __importDefault(require("./consumers"));
const router = (0, express_1.Router)();
router.use('/consumers', consumers_1.default);
exports.default = router;
