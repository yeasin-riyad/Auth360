"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
async function startServer() {
    await (0, db_1.connectToDB)();
    const server = http_1.default.createServer(app_1.default);
    server.listen(process.env.PORT, () => {
        console.log(`Server is now listening to port ${process.env.PORT}`);
    });
}
startServer().catch((err) => {
    console.error("Error while starting the server", err);
    process.exit(1);
});
