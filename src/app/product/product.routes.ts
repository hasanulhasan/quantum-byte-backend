import express from 'express'
import {createProduct, deleteSingleProduct, getAllProducts, getCategoriesProduct, getSingleProduct, updateSingleProduct } from './product.controller';

const router = express.Router();

router.delete('/:id', deleteSingleProduct)
router.patch('/:id', updateSingleProduct)
router.get('/:id', getSingleProduct)
router.get('/category/:category', getCategoriesProduct)
router.get('/', getAllProducts)
router.post('/create-product', createProduct)

export const productRoutes = router;