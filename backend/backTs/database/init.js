"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_1 = __importDefault(require("./models/consumer"));
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => {
    consumer_1.default.sync({ alter: true });
};
exports.default = dbInit;
