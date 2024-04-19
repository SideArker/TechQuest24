"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const menu_1 = __importDefault(require("../models/menu"));
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield menu_1.default.create(payload);
    return menu;
});
exports.create = create;
const update = (date, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield menu_1.default.findByPk(date);
    if (!menu) {
        // @todo throw custom error
        throw new Error('not found');
    }
    const updatedMenu = yield menu.update(payload);
    return updatedMenu;
});
exports.update = update;
const getById = (date) => __awaiter(void 0, void 0, void 0, function* () {
    const menu = yield menu_1.default.findByPk(date);
    if (!menu) {
        // @todo throw custom error
        throw new Error('not found');
    }
    return menu;
});
exports.getById = getById;
const deleteById = (date) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMenuCount = yield menu_1.default.destroy({
        where: { date }
    });
    return !!deletedMenuCount;
});
exports.deleteById = deleteById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return menu_1.default.findAll();
});
exports.getAll = getAll;
