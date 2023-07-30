import express from 'express'
import {createProduct, deleteSingleProduct, getAllProducts, getCategoriesProduct, getSingleProduct, updateSingleProduct } from './product.controller';

const router = express.Router();

router.delete('/:id', deleteSingleProduct)
router.patch('/:id', updateSingleProduct)
router.get('/:category', getCategoriesProduct)
router.get('/:id', getSingleProduct)
router.get('/', getAllProducts)
router.post('/create-product', createProduct)

export const productRoutes = router;