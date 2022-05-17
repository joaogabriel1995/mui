"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const PORT_SERVER = 3333;
const app = (0, express_1.default)();
app.use(routes_1.appRouter);
app.use(express_1.default.json());
app.listen(PORT_SERVER, () => {
    console.log(`http://localhost:${PORT_SERVER}`);
});
//# sourceMappingURL=server.js.map