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
const meal_1 = __importDefault(require("../models/meal"));
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = yield meal_1.default.create(payload);
    return meal;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = yield meal_1.default.findByPk(id);
    if (!meal) {
        // @todo throw custom error
        throw new Error('not found');
    }
    const updatedMeal = yield meal.update(payload);
    return updatedMeal;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = yield meal_1.default.findByPk(id);
    if (!meal) {
        // @todo throw custom error
        throw new Error('not found');
    }
    return meal;
});
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMealCount = yield meal_1.default.destroy({
        where: { id }
    });
    return !!deletedMealCount;
});
exports.deleteById = deleteById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return meal_1.default.findAll();
});
exports.getAll = getAll;
