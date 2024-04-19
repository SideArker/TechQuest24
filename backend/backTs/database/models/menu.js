"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class menu extends sequelize_1.Model {
}
menu.init({
    date: {
        type: sequelize_1.DataTypes.DATE,
        autoIncrement: true,
        primaryKey: true,
    },
    firstMeal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    secondMeal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    drink: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    alergeny: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
    sequelize: config_1.default,
});
exports.default = menu;
