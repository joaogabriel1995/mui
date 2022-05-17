"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const appRouter = (0, express_1.Router)();
exports.appRouter = appRouter;
appRouter.get('/teste', controllers_1.SignUpController.signUp);
//# sourceMappingURL=routes.js.map