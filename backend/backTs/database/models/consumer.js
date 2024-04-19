"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class consumer extends sequelize_1.Model {
}
consumer.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    class: {
        type: sequelize_1.DataTypes.STRING
    },
    isTeacher: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    sequelize: config_1.default,
});
exports.default = consumer;
