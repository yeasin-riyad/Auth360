"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectToDB() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("Mongo connection is successfully established");
    }
    catch (err) {
        console.error("Mongodb connection error!");
        process.exit(1);
    }
}
