"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/routes/index"));
require("dotenv").config();
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.use("/api/v1", index_1.default);
app.listen(3001, () => {
    console.log(process.env.DB_HOST);
});
