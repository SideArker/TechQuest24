"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class meal extends sequelize_1.Model {
}
meal.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    days: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    purchases: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
});
exports.default = meal;
