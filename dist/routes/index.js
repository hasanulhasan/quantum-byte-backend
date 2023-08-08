"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("../app/product/product.routes");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/products',
        route: product_routes_1.productRoutes
    }
];
moduleRoutes.forEach(route => routers.use(route.path, route.route));
exports.default = routers;
