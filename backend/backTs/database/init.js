"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_1 = __importDefault(require("./models/consumer"));
const meal_1 = __importDefault(require("./models/meal"));
const menu_1 = __importDefault(require("./models/menu"));
const dbInit = () => {
    consumer_1.default.sync({ alter: true });
    meal_1.default.sync({ alter: true });
    menu_1.default.sync({ alter: true });
};
exports.default = dbInit;
