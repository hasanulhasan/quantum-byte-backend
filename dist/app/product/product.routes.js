"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.delete('/:id', product_controller_1.deleteSingleProduct);
router.patch('/:id', product_controller_1.updateSingleProduct);
router.get('/:id', product_controller_1.getSingleProduct);
router.get('/category/:category', product_controller_1.getCategoriesProduct);
router.get('/', product_controller_1.getAllProducts);
router.post('/create-product', product_controller_1.createProduct);
exports.productRoutes = router;
