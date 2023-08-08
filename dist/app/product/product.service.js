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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.getProductByCategory = exports.getProduct = exports.getProducts = exports.createProductToDB = void 0;
const product_model_1 = require("./product.model");
const createProductToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.create(payload);
    return product;
});
exports.createProductToDB = createProductToDB;
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find({});
    return products;
});
exports.getProducts = getProducts;
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    return product;
});
exports.getProduct = getProduct;
const getProductByCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.find({ category: payload });
    return product;
});
exports.getProductByCategory = getProductByCategory;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findByIdAndDelete(id);
    return product;
});
exports.deleteProduct = deleteProduct;
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOneAndUpdate({ _id: id }, payload, { new: true });
    console.log('updated form service', product);
    return product;
});
exports.updateProduct = updateProduct;
